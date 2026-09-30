import { useSyncExternalStore } from "react";

import type { Product } from "@/store/products.store";

let cartItems: Product[] = [];
const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const getSnapshot = () => cartItems;

export const useCartItems = () =>
  useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

export const addToCart = (product: Product) => {
  if (cartItems.some((item) => item.id === product.id)) return;

  cartItems = [...cartItems, product];
  listeners.forEach((listener) => listener());
};
