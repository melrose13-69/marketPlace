import React, { useEffect, useState } from 'react';
import s from './ProductsShopSort.module.scss';


const ProductsShopSort = ( { pageControls, changePageSize, changeSort } ) => {
    const [sort, setSortIndex] = useState( pageControls.currentSortStatus );
    const [pageSize, setPageSize] = useState( pageControls.currentPageSize );


    const changeCurrentSort = sort => {
        changeSort( sort );
    };
    const changeCurrentPageSize = pageSize => {
        changePageSize( pageSize );
    };

    useEffect( () => {
        changeCurrentPageSize( pageSize );
        changeCurrentSort( sort );
    }, [pageControls.currentPageSize, pageControls.currentSortStatus, sort, pageSize] );


    return (
        <div className={ s.inner }>
            <div className={ s.sort }>
                {
                    pageControls.sortItems.map( ( item, index ) => {
                        return (
                            <div key={index} onClick={ () => setSortIndex( item.value ) }
                                 className={ sort === item.value ? `${s.sortItem} ${s.active}` : s.sortItem }>
                                { item.name }
                            </div>
                        );
                    } )
                }
            </div>
            <div className={ s.pageSize }>
                {
                    pageControls.pageSizes.map( ( btn, index) => {
                        return (
                            <div key={index} onClick={ () => {setPageSize( parseInt( btn ) );} }
                                 className={ parseInt( btn ) === pageSize ? `${s.pageSizeItem} ${s.active}` : s.pageSizeItem }>
                                { btn }
                            </div>
                        );
                    } )
                }
            </div>
        </div>
    );
};

export default ProductsShopSort;