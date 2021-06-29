const ADD_PRODUCT_IN_COMPARE = 'ADD_PRODUCT_IN_COMPARE';

const initialState = {
    productsInCompare : [],
    compareProductsCount : 0,
    error: false
};

const compareReducer = ( state = initialState, action ) => {

    switch( action.type ) {
        case ADD_PRODUCT_IN_COMPARE:
            return {
                ...state,
                ...(action.status && state.compareProductsCount < 5
                        ? {
                            productsInCompare : [...state.productsInCompare, action.id],
                            compareProductsCount : state.compareProductsCount + 1
                        }
                        : {
                            productsInCompare : [...state.productsInCompare],
                            compareProductsCount : state.compareProductsCount,
                            error: true
                        }
                )
                // productsInCompare :  ? [...state.productsInCompare, action.id] : [...state.productsInCompare],
                // compareProductsCount : action.status ? state.compareProductsCount + 1 : state.compareProductsCount
            };

        default:
            return state;
    }
};

const addProductInCompareAC = ( id, status ) => ({ type : ADD_PRODUCT_IN_COMPARE, id, status });

export const addProductInCompare = ( productId, status ) => dispatch => {
    dispatch( addProductInCompareAC( productId, status ) );
};

export default compareReducer;

