import React from 'react';
import s from './Arrivals.module.scss';
import Photo1 from '../../../assets/img/product/iphone-11.png';
import Photo2 from '../../../assets/img/product/iphone-12.png';
import Photo3 from '../../../assets/img/product/iphone-12-pro.png';
import ProductReview from '../../Products/Product/ProductReview/ProductReview';


const Arrivals = props => {

    return (
        <div className={ `${s.arrivals} section` }>
            <div className='container'>
                <h1 className='title'>New Arrivals</h1>
                <div className='products-inner'>
                    <ProductReview key={props.id} img={Photo1} name={'Iphone 11'} price={'$ 1,050'}/>
                    <ProductReview key={props.id} img={Photo2} name={'Iphone 12'} price={'$ 1,150'}/>
                    <ProductReview key={props.id} img={Photo3} name={'Iphone 12pro'} price={'$ 1,380'}/>
                </div>
            </div>
        </div>
    )
};


export default Arrivals;