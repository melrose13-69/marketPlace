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
                    {
                        props.productList.map(product => {
                            const descr = product.productShortDescr;
                            return <ProductReview key={product.id} productId={product.id} img={descr.image} name={descr.name} price={descr.price}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
};


export default Arrivals;