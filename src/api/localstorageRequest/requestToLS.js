export const requestToLS = {
    postItemFromLocalStorage( item, data ) {
        localStorage.setItem( item, JSON.stringify( data ) );
    },
    getItemFromLocalStorage( item ) {
        const response = localStorage.getItem( item );
        return JSON.parse( response );
    },
    // get LS
    products: this.getItemFromLocalStorage( 'products' ),

    // post LS product
    productStatusChange( productId, status, statusValue, counter ) {
        this.products.productList.forEach( elem => {
            if ( elem.id === productId ) elem.productShortDescr[ status ] = statusValue;
        } );
        statusValue
            ? this.products[ counter ] = this.products[ counter ] + 1
            : this.products[ counter ] = this.products[ counter ] - 1;

        this.postItemFromLocalStorage( 'products', this.products );
    },
    addProductInCart( productId ) {
        this.productStatusChange( productId, 'isInCart', true, 'cartProductsCount' );
    },

    removeProductFromCart( productId ) {
        this.productStatusChange( productId, 'isInCart', false, 'cartProductsCount' );
    },

    addProductInCompare( productId ) {
        if ( this.products.compareProductsCount < 5 ) {
            this.productStatusChange( productId, 'isCompare', true, 'compareProductsCount' );
        }
    },

    removeProductFromCompare: ( productId ) => {
        this.productStatusChange( productId, 'isCompare', false, 'compareProductsCount' );
    }

    // post LS review

};
