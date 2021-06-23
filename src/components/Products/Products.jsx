import React from 'react';
import Product from './Product/Product';
import Aside from '../Aside/Aside';
import s from './Products.module.scss'


const Products = ( props ) => {
    return (
        <div className={s.products}>
            <Aside/>
            <div className={s.wrapper}>
                <Product/>
            </div>
        </div>
    );
};

export default Products;