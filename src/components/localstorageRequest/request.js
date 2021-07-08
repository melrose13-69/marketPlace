export const getItemFromLocalStorage = ( item ) => {
    const response = localStorage.getItem( item );
    return JSON.parse( response );
};

export const postItemFromLocalStorage = ( item, data ) => {
    localStorage.setItem( item, JSON.stringify( data ) );
};

export const request = {

    addProductInCart : ( productId ) => {
        const products = getItemFromLocalStorage( 'products' );

        products.productList.map( elem => {
            if ( elem.id === productId ) {
                elem.productShortDescr.isInCart = true;
            }
        } );
        products.cartProductsCount = products.cartProductsCount + 1;
        postItemFromLocalStorage( 'products', products );
    },

    removeProductFromCart : ( productId ) => {
        const products = getItemFromLocalStorage( 'products' );
        products.productList.map( elem => {
            if ( elem.id === productId ) {
                elem.productShortDescr.isInCart = false;
            }
        } );
        products.cartProductsCount = products.cartProductsCount - 1;
        postItemFromLocalStorage( 'products', products );
    },

    addProductInCompare : ( productId ) => {
        const products = getItemFromLocalStorage( 'products' );
        if ( products.compareProductsCount < 5 ) {
            products.productList.map( elem => {
                if ( elem.id === productId ) {
                    elem.productShortDescr.isCompare = true;
                }
            } );
            products.compareProductsCount = products.compareProductsCount + 1;
            postItemFromLocalStorage( 'products', products );
        }
    },

    removeProductFromCompare : ( productId ) => {
        const products = getItemFromLocalStorage( 'products' );
        products.productList.map( elem => {
            if ( elem.id === productId ) {
                elem.productShortDescr.isCompare = false;
            }
        } );
        products.compareProductsCount = products.compareProductsCount - 1;
        postItemFromLocalStorage( 'products', products );
    }
};
