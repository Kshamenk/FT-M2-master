import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

class Counter extends Component {
  constructor(props){
    return this.super(props)
  }
    
  
  
  // Extra Credit
  incrementIfOdd = () => {
    //Implementar una función de incremento que sólo aumenta si el valor del contador es impar
    const contador = store.getState().contador;
    if (contador % 2 !== 0) {
      store.dispatch(increment());
    }
  };
  // Extra Credit
  incrementAsync = () => {
    //  Implementar una función de incremento que aumenta después de esperar un segundo
    incrementAsync = () => {
      setTimeout(() => {
        store.dispatch(increment());
      }, 1000);
    };
  };

  render() {
    // Completa las funciones onClick de los botones
    // Al hacer clic en estos botones, el recuento debe disminuir o aumentar en consecuencia
    return (
      <p>
        Clickeado: {this.props.count} veces
        <button
          onClick={() => {
            this.props.increment();
          }}
        >
          + {/* Incremeta */}
        </button>
        <button
          onClick={() => {
            this.props.decrement();
          }}
        >
          - {/* Decrementa */}
        </button>
        <button onClick={this.incrementIfOdd}></button>  {/*comentar aca es dificil. le asigno una propiedad onclick haciendo r a this incre...blabla*/}
        <button onClick={this.incrementAsync}></button>
      </p>
    );
  }
}

// La función mapStateToProps especifica qué porción del árbol de estados necesita recibir este componente.
// En este caso, dado que nuestro store de redux sólo almacena el valor del contador,
// este componente recibe el estado completo.
// Sin embargo, en una aplicación redux más compleja,
// recibiría sólo las partes relevantes que necesita del objeto de estado.
const mapStateToProps = (state) => {
  return {
    count: state.count,    //que me retorne el valor actualizado de count
  };
};

// Se llama a la función de connect para que este componente conozca el resto de la arquitectura de redux.
// Sin esto, este componente es sólo un componente tonto de React.
//Pasamos todas las funciones que dependen de Redux, junto con el propio componente,
// para que Redux se dé a conocer a este componente.
export default connect(mapStateToProps, { increment, decrement })(Counter);
//esto ya estaba hecho