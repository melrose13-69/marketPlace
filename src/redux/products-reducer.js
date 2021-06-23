const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
const ADD_IN_BASKET = 'ADD_IN_BASKET';
const ADD_IN_COMPARE = 'ADD_IN_COMPARE';

const initialState = {
    productsList : [
        {
            id : 1,
            images : [],
            productDescr : {
                diagonal : 6.7,
                ram : '12gb',
                memory : '128gb',
                mainCamera : 12,
                cpu : 'A14 Bionic (6 cores), 2.66 GHz'
            },
            isCompare : false,
            isInBasket : false
        }
    ]
};

const productsReducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case ADD_NEW_PRODUCT:
            return {
                ...state,
                productsList : [...state.productsList, {
                    id : 2,
                    images : [],
                    productDescr : {
                        diagonal : action.data.productDiagonal,
                        ram : action.data.productRam,
                        memory : action.data.productMemory,
                        mainCamera : action.data.productCamera,
                        cpu : action.data.productCPU
                    },
                    isCompare : false,
                    isInBasket : false
                }]
            };
        case ADD_IN_BASKET:
            return {
                ...state,
                productsList : [...state.productsList.filter( p => p.id === action.id ),
                    {
                        isInBasket : true
                    }
                ]
            };
        case ADD_IN_COMPARE:
            return {
                ...state,
                productsList : [...state.productsList.filter( p => p.id === action.id ),
                    {
                        isCompare : true
                    }
                ]
            };
        default:
            return state;
    }
};

const addNewProductAC = data => ({ type : ADD_NEW_PRODUCT, data });
const addInBasketAC = productId => ({ type : ADD_IN_BASKET });
const addInCompareAC = productId => ({ type : ADD_IN_COMPARE });

export const addNewProduct = data => dispatch => {
    dispatch( addNewProductAC( data ) );
};
export const addInBasket = productId => dispatch => {
    dispatch( addInBasketAC(productId) );
};
export const addInCompare = productId => dispatch => {
    dispatch( addInCompareAC(productId) );
};

export default productsReducer;

