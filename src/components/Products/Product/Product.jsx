import React from 'react';
import s from './Product.module.scss';
import { NavLink } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';


const Product = ( { productDescr, productId, addInCompare, removeFromCompare, addInCart, removeFromCart, handleNoti, compareError } ) => {
    const handleAddInCompare = ( productId ) => {
        addInCompare( productId );
        compareError.status === true && handleNoti( compareError.title, compareError.text, compareError.type );
    };

    const handleRemoveFromCompare = ( productId ) => {
        removeFromCompare( productId );
    };
    return (
        <div className={ `${s.product}` }>
            <div className={ `${s.imgWrapperGlobal} ${s.imgWrapperHover}` }>
                <div className={ s.img } style={ { backgroundImage : `url(${productDescr.images[0]})` } }>
                    <div className={ s.bg }>
                    </div>
                </div>
                <span className={ s.addCartHover }>
                    <span className={ s.wrapper }>
                        { productDescr.isCompare
                            ?
                            // is compare === true remove from compare
                            <span onClick={ () => {handleRemoveFromCompare( productId );} } className={ `${s.compare} ${s.active}` }>
                                <FavoriteOutlinedIcon/>
                            </span>
                            :
                            // isCompare === false add in compare
                            <span onClick={ () => { handleAddInCompare( productId );} } className={ s.compare }>
                                <FavoriteBorderOutlinedIcon/>
                            </span>
                        }
                        { productDescr.isInCart
                            ?
                            <span onClick={ () => {removeFromCart( productId );} } className={ s.cart }>
                                Remove from cart
                            </span>
                            :
                            <span onClick={ () => {addInCart( productId );} } className={ s.cart }>
                                Add to cart
                            </span>
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