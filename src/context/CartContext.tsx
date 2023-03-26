import { createContext, ReactNode, useCallback, useMemo, useState } from 'react';
import { CartItem } from '~/@types/CartItem';
import { produce } from 'immer';

interface CartContextProviderProps {
  children: ReactNode;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  addCoffeeToCart: (coffee: CartItem) => void;
  changeCartItemQuantity: (cartItemId: number, type: 'increase' | 'decrease') => void;
  removeCartItem: (cartItemId: number) => void;
  cleanCart: () => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const cartQuantity = cartItems.length;
  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  const addCoffeeToCart = useCallback(
    (coffee: CartItem) => {
      const hasCoffeeInCart = cartItems.findIndex(cartItem => cartItem.id === coffee.id);

      const newCart = produce(cartItems, draft => {
        if (hasCoffeeInCart < 0) {
          draft.push(coffee);
          return;
        }

        draft[hasCoffeeInCart].quantity += coffee.quantity;
      });

      setCartItems(newCart);
    },
    [cartItems],
  );

  const changeCartItemQuantity = useCallback(
    (cartItemId: number, type: 'increase' | 'decrease') => {
      const newCart = produce(cartItems, draft => {
        const hasCoffeeInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId);

        if (hasCoffeeInCart >= 0) {
          const item = draft[hasCoffeeInCart];

          if (type === 'increase' && item.quantity > 0) {
            draft[hasCoffeeInCart].quantity += 1;
            return;
          }
          if (type === 'decrease' && item.quantity > 1) {
            draft[hasCoffeeInCart].quantity -= 1;
            return;
          }
        }
      });
      setCartItems(newCart);
    },
    [cartItems],
  );

  const removeCartItem = useCallback(
    (cartItemId: number) => {
      const newCart = produce(cartItems, draft => {
        const hasCoffeeInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId);

        if (hasCoffeeInCart >= 0) {
          draft.splice(hasCoffeeInCart, 1);
        }
      });
      setCartItems(newCart);
    },
    [cartItems],
  );

  function cleanCart() {
    setCartItems([]);
  }
  const cartContextMemo = useMemo(
    () => ({
      cartItems,
      cartQuantity,
      cartItemsTotal,
      addCoffeeToCart,
      changeCartItemQuantity,
      removeCartItem,
      cleanCart,
    }),
    [addCoffeeToCart, cartItems, cartItemsTotal, cartQuantity, changeCartItemQuantity, removeCartItem],
  );

  return <CartContext.Provider value={cartContextMemo}>{children}</CartContext.Provider>;
}
