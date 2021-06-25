import React, { useEffect } from 'react';
import Product from './Product/Product';
import s from './ProductsShop.module.scss';
import ProductsShopSort from '../common/ProductsShopSort/ProductsShopSort';
import Pagination from '../common/Pagination/Pagination';


const ProductsShop = ( { productsList, pageControls, changePageSize, changePage, totalProducts, changeSort, addInCart, removeFromCart, addInCompare, removeFromCompare } ) => {

    const productsCount = () => {
        switch( pageControls.currentSortStatus ) {
            case 'NEW':
                productsList.sort( ( a, b ) => {
                    if ( a.id < b.id ) return 1;
                    if ( a.id > b.id ) return -1;
                    return 0;
                } );
                break;
            case 'H/L':
                productsList.sort( ( a, b ) => {
                    if ( a.productShortDescr.price < b.productShortDescr.price ) return 1;
                    if ( a.productShortDescr.price > b.productShortDescr.price ) return -1;
                    return 0;
                } );
                break;
            case 'L/H':
                productsList.sort( ( a, b ) => {
                    if ( a.productShortDescr.price < b.productShortDescr.price ) return -1;
                    if ( a.productShortDescr.price > b.productShortDescr.price ) return 1;
                    return 0;
                } );
                break;
        }
        console.log( productsList );
        return productsList.map( ( p, index ) =>
            ( index >= (pageControls.currentPageSize * (pageControls.currentPage - 1)) && index < (pageControls.currentPageSize * pageControls.currentPage))
            // index === 0
            && <Product key={ p.id } productDescr={ p.productShortDescr } productId={ p.id }
                        addInCart={ addInCart } removeFromCart={ () => {removeFromCart( p.id );} }
                        addInCompare={ addInCompare } removeFromCompare={ removeFromCompare }/>
        );
    };

    useEffect( () => {
        productsCount();
    }, [pageControls.currentPageSize, pageControls.currentSortStatus] );
    return (
        <div className={ s.products }>
            <div className='container'>
                <div className={ `${s.inner} section` }>
                    <ProductsShopSort pageChange={ changePage } onChangePage={ changePage } changePageSize={ changePageSize } pageControls={ pageControls } totalProducts={ totalProducts } changeSort={ changeSort }/>
                    <div className={ s.wrapper }>
                        { productsCount() }
                    </div>
                    <Pagination currentPage={ pageControls.currentPage } totalCount={ totalProducts } pageSize={ pageControls.currentPageSize } onPageChanged={ changePage } portionSize={ pageControls.currentPageSize }/>
                </div>
            </div>
        </div>
    );
};

export default ProductsShop;