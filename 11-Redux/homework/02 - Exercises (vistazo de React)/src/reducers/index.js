import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:                 //en caso de que tenga que incrementar
      return {
        ...state,               //tomo todo lo que esta en el estado
        count: state.count + 1
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1       //en este caso decrememntamos
      }
    default:
      return state;  //por ultimo retornamos el state
  }
};