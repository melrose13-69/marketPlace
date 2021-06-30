import React from 'react';
import ProductInfo from './ProductInfo';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addInCart, removeFromCart } from '../../redux/products-reducer';
import ReviewsContainer from '../Reviews/ReviwsContainer';


const ProductInfoContainer = ( { selectedProduct, addInCart, removeFromCart } ) => {
    const { productId } = useParams();
    const productInfo = selectedProduct.filter( p => p.id === parseInt( productId ) )[ 0 ];

    return (
        <div className='container'>
            <ProductInfo { ...productInfo } addInCart={ addInCart } removeFromCart={ removeFromCart }/>
            <ReviewsContainer/>
        </div>

    );
};

const mapStateToProps = state => {
    return {
        selectedProduct: state.products.productsList
    };
};

export default compose(
    connect( mapStateToProps, { addInCart, removeFromCart } )
)( ProductInfoContainer );