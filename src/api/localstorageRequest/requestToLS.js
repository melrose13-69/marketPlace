export const requestToLS = {
    postItemFromLocalStorage( item, data ) {
        localStorage.setItem( item, JSON.stringify( data ) );
    },
    getItemFromLocalStorage( item ) {
        const response = localStorage.getItem( item );
        return JSON.parse( response );
    },

    // post LS product
    productStatusChange( productId, status, statusValue, counter ) {

        this.getItemFromLocalStorage.productList.forEach( elem => {
            if ( elem.id === productId ) elem.productShortDescr[ status ] = statusValue;
        } );
        statusValue
            ? this.getItemFromLocalStorage[ counter ] = this.getItemFromLocalStorage[ counter ] + 1
            : this.getItemFromLocalStorage[ counter ] = this.getItemFromLocalStorage[ counter ] - 1;

        this.postItemFromLocalStorage( 'products', this.getItemFromLocalStorage );
    },

    addProductInCart( productId ) {
        this.productStatusChange( productId, 'isInCart', true, 'cartProductsCount' );
    },

    removeProductFromCart( productId ) {
        this.productStatusChange( productId, 'isInCart', false, 'cartProductsCount' );
    },

    addProductInCompare( productId ) {
        if ( this.getItemFromLocalStorage.compareProductsCount < 5 ) {
            this.productStatusChange( productId, 'isCompare', true, 'compareProductsCount' );
        }
    },

    removeProductFromCompare: ( productId ) => {
        this.productStatusChange( productId, 'isCompare', false, 'compareProductsCount' );
    }

    // post LS review
};
