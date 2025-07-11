import { useContext } from 'react';
import { CartContext } from './CartContextDefinition';

export const useCart = () => {
  return useContext(CartContext);
};
