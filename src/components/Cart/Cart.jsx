import React, { useEffect, useState } from 'react';
import s from './Cart.module.scss';
import CartProduct from './CartProduct/CartProduct';
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import Button from '../common/Button/Button';
import NotFound from '../common/NotFound/NotFount';


const Compare = ( { cartProducts, removeFromCart } ) => {
    let price;
    if ( cartProducts.length > 0 ) {
        price = cartProducts.map( p => {
            return p.productShortDescr.price;
        } ).reduce( ( acc, val ) => acc + val );

    }

    const [ isChecked, setCheckedStatus ] = useState( false );
    const [ totalPrice, setTotalPrice ] = useState( price );

    useEffect( () => {
        isChecked ? setTotalPrice( price - ((price / 100) * 10) ) : setTotalPrice( price );
    }, [ isChecked, price ] );

    return (
        <div className={ `${ s.wrapper } section` }>
            <div className='container'>
                <div>
                    <div className={ s.inner }>
                        <h1 className={'global-title'}>Cart products</h1>
                        { cartProducts.length === 0
                            ? <NotFound message={ 'Not found products in basket' } linkTo={ '/shop' }
                                        btnText={ 'go to shop' }/>
                            : <div className={ s.innerContent }>
                                <div className={ s.compareItems }>
                                    {
                                        cartProducts.map( p =>
                                            <CartProduct productId={ p.id } key={ p.id }
                                                         productInfo={ p.productShortDescr }
                                                         removeFromCart={ removeFromCart }/> )
                                    }
                                </div>
                                <div className={ s.aside }>
                                    <div className={ s.name }>
                                        <span>Cost of goods:</span><span>$ <span>{ price }</span></span>
                                    </div>
                                    <div className={ s.name }>
                                        <span>Would you like to get a discount?</span>
                                        <span onClick={ () => {setCheckedStatus( !isChecked );} }>
                                        { isChecked ? <CheckBoxOutlinedIcon/> : <CheckBoxOutlineBlankOutlinedIcon/> }
                                    </span>
                                    </div>
                                    <div className={ s.name }>
                                        <span>Final cost of goods:</span><span><span>$ </span>{ totalPrice }</span>
                                    </div>
                                    <div>
                                        <Button to={ 'empty' } text={ 'buy now' }/>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Compare;