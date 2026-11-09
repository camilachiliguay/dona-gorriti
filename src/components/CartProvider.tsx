"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { menu, type MenuItem } from "@/data/menu";

export type CartLine = {
  id: string;
  qty: number;
};

type CartContextValue = {
  lines: CartLine[];
  detailed: Array<{ item: MenuItem; qty: number }>;
  count: number;
  subtotal: number;
  isOpen: boolean;
  toast: string | null;
  openCart: () => void;
  closeCart: () => void;
  add: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "dona-gorriti-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const hydrated = useRef(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Restaurar el carrito guardado: se hace en un efecto (y no en el useState inicial)
  // porque localStorage no existe en el servidor y causaría un error de hidratación.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartLine[];
        if (Array.isArray(parsed)) {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setLines(
            parsed.filter(
              (line) =>
                line &&
                typeof line.id === "string" &&
                typeof line.qty === "number" &&
                line.qty > 0 &&
                menu.some((item) => item.id === line.id),
            ),
          );
        }
      }
    } catch {
      // JSON inválido en localStorage: se ignora y se arranca con el carrito vacío
    }
    hydrated.current = true;
  }, []);

  useEffect(() => {
    if (!hydrated.current) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const showToast = useCallback((message: string) => {
    setToast(message);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2200);
  }, []);

  const add = useCallback(
    (id: string) => {
      const item = menu.find((entry) => entry.id === id);
      if (!item) return;
      setLines((current) => {
        const existing = current.find((line) => line.id === id);
        if (existing) {
          return current.map((line) =>
            line.id === id ? { ...line, qty: line.qty + 1 } : line,
          );
        }
        return [...current, { id, qty: 1 }];
      });
      showToast(`${item.name} agregada`);
    },
    [showToast],
  );

  const setQty = useCallback((id: string, qty: number) => {
    setLines((current) =>
      qty <= 0
        ? current.filter((line) => line.id !== id)
        : current.map((line) => (line.id === id ? { ...line, qty } : line)),
    );
  }, []);

  const remove = useCallback((id: string) => {
    setLines((current) => current.filter((line) => line.id !== id));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const detailed = useMemo(
    () =>
      lines
        .map((line) => {
          const item = menu.find((entry) => entry.id === line.id);
          return item ? { item, qty: line.qty } : null;
        })
        .filter((line): line is { item: MenuItem; qty: number } => line !== null),
    [lines],
  );

  const count = useMemo(
    () => lines.reduce((total, line) => total + line.qty, 0),
    [lines],
  );

  const subtotal = useMemo(
    () => detailed.reduce((total, line) => total + line.item.price * line.qty, 0),
    [detailed],
  );

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      detailed,
      count,
      subtotal,
      isOpen,
      toast,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      add,
      setQty,
      remove,
      clear,
    }),
    [lines, detailed, count, subtotal, isOpen, toast, add, setQty, remove, clear],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe usarse dentro de CartProvider");
  return context;
}
