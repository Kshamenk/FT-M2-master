import { connect } from "react-redux";
import React from "react";
import Card from '../Card/Card';
import "./products.css";

export function Products({ list }) {
  return (
    <>
      <div className="productsBg">
        <h1 className="productsTl">HENRY MARKET</h1>
        <div className="productsList">
          {
            list.map((product) => {
              return (
                <Card
              key={product.id}
              name={product.name}
              price={product.price}
              id={product.id}
            />
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export function mapStateToProps(state) {
  return {
    list: state.list,
  }
}

export default connect(mapStateToProps, null)(Products);