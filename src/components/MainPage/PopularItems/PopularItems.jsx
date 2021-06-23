import React, { useEffect, useState } from 'react';
import s from './PopularItems.module.scss';
import Photo1 from '../../../assets/img/product/iphone-11.png';
import Photo2 from '../../../assets/img/product/iphone-12.png';
import Photo3 from '../../../assets/img/product/iphone-12-pro.png';
import Product from '../../Products/Product/Product';


const PopularItems = props => {
    const [width, setWidth] = useState( 350 );
    useEffect( () => {
        window.addEventListener( 'resize', () => {
            setWidth( (window.innerWidth / 2.7) / 2 );
        } );
    }, [width] );

    return (
        <div className={ `${s.popularItems} section` }>
            <div className='container'>
                <div className={ `${s.title} title` }>
                    <h1>Popular Items</h1>
                    <p>We’re always innovating to reduce our carbon footprint. Smaller boxes. More boxes per shipment. Recycled materials. Renewable energy. Efforts like these have allowed us to eliminate over 2 million metric tons of carbon emissions annually. And we’re not done yet.</p>
                    <div className='products-inner'>
                        <Product effect={'menu'} img={Photo1} name={'Iphone 11'} price={'$ 1,050'}/>
                        <Product effect={'menu'} img={Photo2} name={'Iphone 12'} price={'$ 1,250'}/>
                        <Product effect={'menu'} img={Photo3} name={'Iphone 12pro'} price={'$ 1,550'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularItems;