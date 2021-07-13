import React, { useEffect } from 'react';
import Product from './Product/Product';
import s from './ProductsShop.module.scss';
import ProductsShopSort from '../common/ProductsShopSort/ProductsShopSort';
import Pagination from '../common/Pagination/Pagination';
import { requestToLS} from '../../api/localstorageRequest/requestToLS';


const ProductsShop = ( {
                           productsList, compareError, pageControls, changePageSize, changePage, totalProducts,
                           changeSort, addInCompare, removeFromCompare, addInCart, removeFromCart, handleNoti,
                           getProducts, compareProductsCount, cartProductsCount
                       } ) => {

    useEffect( () => {
        getProducts();
    }, [] );

    if ( requestToLS.getItemFromLocalStorage('products') === null ) {
        requestToLS.postItemFromLocalStorage( 'products',
            {
                productList : productsList,
                compareProductsCount : compareProductsCount,
                cartProductsCount : cartProductsCount,
            }
        );
    }

    useEffect( () => {
        const productsCount = () => {
            switch( pageControls.currentSortStatus ) {
                case 'NEW':
                    return productsList.sort( ( a, b ) => {
                        if ( a.id < b.id ) return 1;
                        if ( a.id > b.id ) return -1;
                        return 0;
                    } );
                case 'H/L':
                    return productsList.sort( ( a, b ) => {
                        if ( a.productShortDescr.price < b.productShortDescr.price ) return 1;
                        if ( a.productShortDescr.price > b.productShortDescr.price ) return -1;
                        return 0;
                    } );
                case 'L/H':
                    return productsList.sort( ( a, b ) => {
                        if ( a.productShortDescr.price < b.productShortDescr.price ) return -1;
                        if ( a.productShortDescr.price > b.productShortDescr.price ) return 1;
                        return 0;
                    } );
                default:
                    return productsList;
            }
        };

        productsCount();
    }, [pageControls.currentPageSize, pageControls.currentSortStatus, productsList] );

    return (
        <>
        <div className={ s.products }>
            <div className='container'>
                <div className={ `${ s.inner } section` }>
                    <ProductsShopSort pageChange={ changePage } onChangePage={ changePage }
                                      changePageSize={ changePageSize } pageControls={ pageControls }
                                      totalProducts={ totalProducts } changeSort={ changeSort }/>
                    <div className={ s.wrapper }>
                        { productsList.map( ( p, index ) =>
                            (index >= (pageControls.currentPageSize * (pageControls.currentPage - 1)) && index < (pageControls.currentPageSize * pageControls.currentPage))
                            // index === 0
                            && <Product key={ p.id } productDescr={ p.productShortDescr } productId={ p.id }
                                        addInCompare={ addInCompare } addInCart={ addInCart }
                                        removeFromCart={ removeFromCart } removeFromCompare={ removeFromCompare }
                                        handleNoti={ handleNoti } compareError={ compareError }/>
                        ) }
                    </div>
                    <Pagination currentPage={ pageControls.currentPage } totalCount={ totalProducts }
                                pageSize={ pageControls.currentPageSize } onPageChanged={ changePage }
                                portionSize={ pageControls.currentPageSize }/>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProductsShop;