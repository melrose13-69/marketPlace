import React from 'react';
import s from './CartProduct.module.scss';
import { NavLink } from 'react-router-dom';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

const CompareProduct = ( {productInfo, removeFromCart, productId} ) => {

    return (
        <div className={ `${s.product}` }>
            <div className={s.imgWrapper}>
                <span onClick={() => {removeFromCart(productId)}} className={s.removeFromCart}><CloseOutlinedIcon /></span>
                <div className={ s.img } style={ { backgroundImage : `url(${productInfo.images[0]})` } }>
                    <div className={ s.bg }>
                    </div>
                </div>
            </div>
            <div className={ s.info }>
                <div className={ s.infoTarget }>
                    <div className={`${s.productName} product-name`}>
                        <NavLink to={'/info'}>{productInfo.name}</NavLink>
                    </div>
                    <div className={ s.infoTarget }>{ productInfo.memory }</div>
                </div>
                <div className={ `${s.price} product-price` }>{`$ ${productInfo.price}`}</div>
            </div>
        </div>
    );
};

export default CompareProduct;