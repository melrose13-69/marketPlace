import React, { useEffect, useState } from 'react';
import s from './PopularItems.module.scss';
import popularItems from '../../../assets/img/popular-items.jpg';
import Button from '../../common/Button/Button';


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
                    <h1>Blast past fast</h1>
                    <p>We’re always innovating to reduce our carbon footprint. Smaller boxes. More boxes per shipment. Recycled materials. Renewable energy. Efforts like these have allowed us to eliminate over 2 million metric tons of carbon emissions annually. And we’re not done yet.</p>
                    <Button to={'/shop'} text={'View More Products'}/>
                    <div className='products-inner'>
                        <img src={popularItems} alt='popular items'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularItems;