import React, { useState } from "react";
import { connect } from "react-redux";
import { addProduct } from "../../redux/actions/actions.js";

import Caja from "../../assets/caja.png";
import "./form.css";

function Form({ addProduct }) {
  const [product, setProduct] = useState({ name: "", price: "", id: "" });

  function handleInputChange(e) {
    e.preventDefault();
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newProduct = { ...product, id: Date.now() };
    addProduct(newProduct);
    setProduct({ name: "", price: "", id: "" });
  }

  return (
    <div className="formBg">
      <form onSubmit={handleSubmit}>
        <div className="inputBox">
          <label>Nombre: </label>
          <input name="name" onChange={handleInputChange} value={product.name} />
        </div>
        <div className="inputBox">
          <label>Precio:</label>
          <input
            type="number"
            name="price"
            onChange={handleInputChange}
            value={product.price}
          />
        </div>
        <button className="formBtn" type="submit">
          ¡ADD!
        </button>
      </form>
      <img src={Caja} alt="" className="logo" />
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addProduct: (product) => dispatch(addProduct(product)),
  };
}

export default connect(null, mapDispatchToProps)(Form);