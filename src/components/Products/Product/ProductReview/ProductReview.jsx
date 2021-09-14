import React from 'react';
import s from './ProductReview.module.scss';
import { NavLink } from 'react-router-dom';


const ProductReview = props => {
    return (
        <div key={ props.key } className={ s.product }>
            <div
                className={ `${s.imgWrapperGlobal} ${s.imgWrapperScale}` }>
                <div className={ s.img } style={ { backgroundImage : `url(${props.img})` } }>
                </div>
            </div>
            <div className={ s.info }>
                <div className='product-name'><NavLink to={ `/product/${props.productId}` }>{ props.name }</NavLink></div>
                <div className='product-price'>{ props.price }</div>
            </div>
        </div>
    );
};

export default ProductReview;