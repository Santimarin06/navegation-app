import { useSyncExternalStore } from "react";

import type { Product } from "@/store/products.store";

let cartItems: Product[] = [];
const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const getSnapshot = () => cartItems;

const notifyListeners = () => {
  listeners.forEach((listener) => listener());
};

export const useCartItems = () =>
  useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

export const addToCart = (product: Product) => {
  if (cartItems.some((item) => item.id === product.id)) return;

  cartItems = [...cartItems, product];
  notifyListeners();
};

export const removeFromCart = (productId: string) => {
  const updatedItems = cartItems.filter((item) => item.id !== productId);
  if (updatedItems.length === cartItems.length) return;

  cartItems = updatedItems;
  notifyListeners();
};
