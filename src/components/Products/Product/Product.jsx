import React, { useEffect, useState } from 'react';
import s from './Product.module.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { NavLink } from 'react-router-dom';


const Product = ( { productDescr, addInCart, removeFromCart, productId, addInCompare, removeFromCompare } ) => {
    
    const [cardStatus, setCardStatus] = useState( productDescr.isInCart );
    const [compareStatus, setCompareStatus] = useState( productDescr.isCompare );

    const removeFromCartProduct = () => {
        removeFromCart(productId);
        setCardStatus(false);
    };
    const addToCartProduct = () => {
        addInCart(productId);
        setCardStatus(true);
    };

    const addCompareStatus = () => {
        removeFromCompare(productId);
        setCompareStatus(false);
    };
    const removeCompareStatus = () => {
        addInCompare(productId);
        setCompareStatus(true);
    };

    return (
        <div className={ `${s.product}` }>
            <div
                className={ `${s.imgWrapperGlobal} ${s.imgWrapperHover}` }>
                <div className={ s.img } style={ { backgroundImage : `url(${productDescr.images[0]})` } }>
                    <div className={ s.bg }>
                    </div>
                </div>
                <span className={ s.addCartHover }>
                    <span className={ s.wrapper }>
                        {
                            compareStatus
                                ?
                                <span onClick={ () => {removeCompareStatus()} } className={ `${s.compare} ${s.active}` }><FavoriteBorderIcon/></span>
                                :
                                <span onClick={ () => {addCompareStatus()} } className={ s.compare }><FavoriteBorderIcon/></span>
                        }
                        {
                            cardStatus
                                ?
                                <span onClick={ () => {removeFromCartProduct()} } className={ s.cart }>Remove from cart</span>
                                :
                                <span onClick={ () => {addToCartProduct()} } className={ s.cart }>Add to cart</span>
                        }

                    </span>
                </span>
            </div>
            <div className={ s.info }>
                <div className={ s.infoTarget }>
                    <div className='product-name'>
                        <NavLink to={ '/shop' }>{ productDescr.name }</NavLink>
                    </div>
                    <div className={ `${s.price} product-price` }>{ `$ ${productDescr.price}` }</div>
                </div>
                <div className={ s.infoTarget }>
                    <span>Display diagonal: </span><span>{ productDescr.diagonal }</span>
                </div>
                <div className={ s.infoTarget }>
                    <span>RAM: </span><span>{ productDescr.ram }</span>
                </div>
                <div className={ s.infoTarget }>
                    <span>Memory: </span><span>{ productDescr.memory }</span>
                </div>
                <div className={ s.infoTarget }>
                    <span>Camera: </span><span>{ productDescr.mainCamera }</span>
                </div>
                <div className={ s.infoTarget }>
                    <span>CPU: </span><span>{ productDescr.cpu }</span>
                </div>

            </div>
        </div>
    );
};

export default Product;