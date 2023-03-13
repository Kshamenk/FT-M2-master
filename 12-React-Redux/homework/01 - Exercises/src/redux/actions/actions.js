import { ADD_PRODUCT, DELETE_PRODUCT } from './types';

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,   // retorna un tipo y un payload(producto)
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};
