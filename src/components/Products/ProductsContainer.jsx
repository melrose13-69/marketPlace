import React from 'react';
import Products from "./Products";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        productsList: state.products.productsList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};
const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products);

export default ProductsContainer;