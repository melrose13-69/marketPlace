const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
const ADD_IN_BASKET = 'ADD_IN_BASKET';
const ADD_IN_CART = 'ADD_IN_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const ADD_IN_COMPARE = 'ADD_IN_COMPARE';
const REMOVE_FROM_COMPARE = 'REMOVE_FROM_COMPARE';

const initialState = {
    productsList : [
        {
            id : 1,
            productShortDescr : {
                images : ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021660000'],
                name : 'Iphone 11',
                price : 1001,
                diagonal : 6.3,
                ram : '12gb',
                memory : '128gb',
                mainCamera : 12,
                cpu : 'A14 Bionic (6 cores), 2.66 GHz',
                additionDate : {
                    date : 1,
                    month : 2,
                    year : 2021
                },
                isCompare : false,
                isInCart : false
            },
            productMoreDescription : {}
        },
        {
            id : 2,
            productShortDescr : {
                images : ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021660000'],
                name : 'Iphone 11',
                price : 1000,
                diagonal : 6.2,
                ram : '12gb',
                memory : '128gb',
                mainCamera : 12,
                cpu : 'A14 Bionic (6 cores), 2.66 GHz',
                additionDate : {
                    date : 2,
                    month : 2,
                    year : 2021
                },
                isCompare : false,
                isInCart : false
            },
            productMoreDescription : {}
        },
        {
            id : 3,
            productShortDescr : {
                images : ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021660000'],
                name : 'Iphone 11',
                price : 1001,
                diagonal : 6.1,
                ram : '12gb',
                memory : '128gb',
                mainCamera : 12,
                cpu : 'A14 Bionic (6 cores), 2.66 GHz',
                additionDate : {
                    date : 5,
                    month : 2,
                    year : 2021
                },
                isCompare : false,
                isInCart : false
            },
            productMoreDescription : {}
        },
        {
            id : 4,
            productShortDescr : {
                images : ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021660000'],
                name : 'Iphone 11',
                price : 1013,
                diagonal : 5.7,
                ram : '12gb',
                memory : '128gb',
                mainCamera : 12,
                cpu : 'A14 Bionic (6 cores), 2.66 GHz',
                additionDate : {
                    date : 7,
                    month : 2,
                    year : 2021
                },
                isCompare : false,
                isInCart : false
            },
            productMoreDescription : {}
        },
        {
            id : 5,
            productShortDescr : {
                images : ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021660000'],
                name : 'Iphone 11',
                price : 1003,
                diagonal : 6.7,
                ram : '12gb',
                memory : '128gb',
                mainCamera : 12,
                cpu : 'A14 Bionic (6 cores), 2.66 GHz',
                additionDate : {
                    date : 8,
                    month : 2,
                    year : 2021
                },
                isCompare : false,
                isInCart : false
            },
            productMoreDescription : {}
        },
        {
            id : 6,
            productShortDescr : {
                images : ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021660000'],
                name : 'Iphone 12',
                price : 1004,
                diagonal : 3.7,
                ram : '12gb',
                memory : '128gb',
                mainCamera : 12,
                cpu : 'A14 Bionic (6 cores), 2.66 GHz',
                additionDate : {
                    date : 11,
                    month : 3,
                    year : 2021
                },
                isCompare : false,
                isInCart : false
            },
            productMoreDescription : {}
        },
        {
            id : 32,
            productShortDescr : {
                images : ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021660000'],
                name : 'Iphone 12',
                price : 1005,
                diagonal : 6.7,
                ram : '12gb',
                memory : '128gb',
                mainCamera : 12,
                cpu : 'A14 Bionic (6 cores), 2.66 GHz',
                additionDate : {
                    date : 13,
                    month : 1,
                    year : 2020
                },
                isCompare : false,
                isInCart : false
            },
            productMoreDescription : {}
        },
        {
            id : 8,
            productShortDescr : {
                images : ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021660000'],
                name : 'Iphone 11',
                price : 1006,
                diagonal : 6.3,
                ram : '12gb',
                memory : '128gb',
                mainCamera : 12,
                cpu : 'A14 Bionic (6 cores), 2.66 GHz',
                additionDate : {
                    date : 31,
                    month : 11,
                    year : 2019
                },
                isCompare : false,
                isInCart : false
            },
            productMoreDescription : {}
        },
        {
            id : 67,
            productShortDescr : {
                images : ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021660000'],
                name : 'Iphone 11',
                price : 1007,
                diagonal : 6.2,
                ram : '12gb',
                memory : '128gb',
                mainCamera : 12,
                cpu : 'A14 Bionic (6 cores), 2.66 GHz',
                additionDate : {
                    date : 1,
                    month : 3,
                    year : 2021
                },
                isCompare : false,
                isInCart : false
            },
            productMoreDescription : {}
        },
        {
            id : 10,
            productShortDescr : {
                images : ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021660000'],
                name : 'Iphone 11',
                price : 1006,
                diagonal : 6.1,
                ram : '12gb',
                memory : '128gb',
                mainCamera : 12,
                cpu : 'A14 Bionic (6 cores), 2.66 GHz',
                additionDate : {
                    date : 2,
                    month : 4,
                    year : 2021
                },
                isCompare : false,
                isInCart : false
            },
            productMoreDescription : {}
        },
        {
            id : 98,
            productShortDescr : {
                images : ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021660000'],
                name : 'Iphone 13',
                price : 1003,
                diagonal : 5.7,
                ram : '12gb',
                memory : '128gb',
                mainCamera : 12,
                cpu : 'A14 Bionic (6 cores), 2.66 GHz',
                additionDate : {
                    date : 3,
                    month : 5,
                    year : 2021
                },
                isCompare : false,
                isInCart : false
            },
            productMoreDescription : {}
        },
        {
            id : 12,
            productShortDescr : {
                images : ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021660000'],
                name : 'Iphone 11',
                price : 1010,
                diagonal : 6.7,
                ram : '12gb',
                memory : '128gb',
                mainCamera : 12,
                cpu : 'A14 Bionic (6 cores), 2.66 GHz',
                additionDate : {
                    date : 2,
                    month : 4,
                    year : 2020
                },
                isCompare : false,
                isInCart : false
            },
            productMoreDescription : {}

        },
        {
            id : 13,
            productShortDescr : {
                images : ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021660000'],
                name : 'Iphone 11',
                price : 1011,
                diagonal : 3.7,
                ram : '12gb',
                memory : '128gb',
                mainCamera : 12,
                cpu : 'A14 Bionic (6 cores), 2.66 GHz',
                additionDate : {
                    date : 11,
                    month : 10,
                    year : 2021
                },
                isCompare : false,
                isInCart : false
            },
            productMoreDescription : {}

        },
        {
            id : 88,
            productShortDescr : {
                images : ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021660000'],
                name : 'Iphone 11',
                price : 1012,
                diagonal : 6.7,
                ram : '12gb',
                memory : '128gb',
                mainCamera : 12,
                cpu : 'A14 Bionic (6 cores), 2.66 GHz',
                additionDate : {
                    date : 1,
                    month : 2,
                    year : 2021
                },
                isCompare : false,
                isInCart : false
            },
            productMoreDescription : {}

        }
    ]
};
const updateObjectInArray = ( items, itemId, objPropName, newObjProps ) => {
    return items.map( item => item[objPropName] === itemId ? { ...item, newObjProps } : item );
};
const productsReducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case ADD_NEW_PRODUCT:
            return {
                ...state,
                productsList : [...state.productsList, {
                    id : 2,
                    productShortDescr : {
                        images : ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021660000'],
                        name : 'Iphone 11',
                        price : 1000,
                        diagonal : action.data.productDiagonal,
                        ram : action.data.productRam,
                        memory : action.data.productMemory,
                        mainCamera : action.data.productCamera,
                        cpu : action.data.productCPU,
                        additionDate : {
                            date : 1,
                            month : 2,
                            year : 2021
                        },
                        isCompare : false,
                        isInCart : false
                    },
                    productMoreDescription : {}
                }]
            };
        case ADD_IN_CART:
            return {
                ...state,
                productsList : state.productsList.map( product => {
                    return product.id === action.id
                        ? {
                            ...product,
                            productShortDescr : {
                                ...product.productShortDescr,
                                isInCart : true
                            }
                        }
                        : product;
                } )
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                productsList : state.productsList.map( product => {
                    return product.id === action.id
                        ? {
                            ...product,
                            productShortDescr : {
                                ...product.productShortDescr,
                                isInCart : false
                            }
                        }
                        : product;
                } )
            };
        case ADD_IN_COMPARE:
            return {
                ...state,
                productsList : state.productsList.map( product => {
                    return product.id === action.id
                        ? {
                            ...product,
                            productShortDescr : {
                                ...product.productShortDescr,
                                isCompare : false
                            }
                        }
                        : product;
                } )
            };
        case REMOVE_FROM_COMPARE:
            return {
                ...state,
                productsList : state.productsList.map( product => {
                    return product.id === action.id
                        ? {
                            ...product,
                            productShortDescr : {
                                ...product.productShortDescr,
                                isCompare : false
                            }
                        }
                        : product;
                } )
            };
        default:
            return state;
    }
};

const addNewProductAC = data => ({ type : ADD_NEW_PRODUCT, data });
const addInCartAC = id => ({ type : ADD_IN_CART, id });
const removeFromCartAC = id => ({ type : REMOVE_FROM_CART, id });
const addInCompareAC = productId => ({ type : ADD_IN_COMPARE });
const removeFromCompareAC = productId => ({ type : ADD_IN_COMPARE });

export const addNewProduct = data => dispatch => {
    dispatch( addNewProductAC( data ) );
};
export const addInCart = id => dispatch => {
    dispatch( addInCartAC( id ) );
};
export const removeFromCart = id => dispatch => {
    dispatch( removeFromCartAC( id ) );
};
export const addInCompare = productId => dispatch => {
    dispatch( addInCompareAC( productId ) );
};
export const removeFromCompare = productId => dispatch => {
    dispatch( removeFromCompareAC( productId ) );
};

export default productsReducer;

