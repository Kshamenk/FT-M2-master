import { ADD_PRODUCT, DELETE_PRODUCT } from '../actions/types.js';

const initialState = {
  list: []
};

const rootReducer = (state = initialState, action) => {  //el reductor tiene 2 parametros, el estado y la accion
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        list: [...state.list, action.payload]  //acedemos a la propiedad list,a traves del state
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        list: state.list.filter((product) => product.id !== action.payload)   // filtro el arreglo list para remover el producto con el id recibido
      };
    default:
      return state;
  }
};

export default rootReducer;