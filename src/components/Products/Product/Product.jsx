import React from 'react';
import s from './Product.module.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { NavLink } from 'react-router-dom';

const Product = props => {
        return (
            <div key='1' className={ s.product }>
                <div
                    className={ `
                    ${s.imgWrapperGlobal}
                    ${props.effect === 'scale' ? s.imgWrapperScale : s.imgWrapperHover}
                    ` }>
                    <div className={s.img} style={ { backgroundImage : `url(${props.img})` } }> </div>
                    {props.effect !== 'scale' &&
                            <span className={s.addCartHover}>
                                <span className={s.wrapper}>
                                    <span className={s.compare}><FavoriteBorderIcon /></span>
                                    <span className={s.cart}>Add to cart</span>
                                </span>
                            </span>
                    }
                </div>
                <div className={s.info}>
                    <div className='product-name'><NavLink to={'/shop'}>{props.name}</NavLink></div>
                    <div className='product-price'>{props.price}</div>
                </div>
            </div>
        );
    }
;

export default Product;