const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';

const REMOVE_FROM_COMPARE = 'REMOVE_FROM_COMPARE';
const ADD_IN_COMPARE = 'ADD_IN_COMPARE';
const ADD_IN_CART = 'ADD_IN_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';

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
            productMoreDescription : {
                images : [
                    {
                        img : 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021660000',
                        color : 'black',
                        colorDescr : 'Black'
                    },
                    {
                        img : 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021660000',
                        color : 'red',
                        colorDescr : 'Red'
                    }, {
                        img : 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021660000',
                        color : 'green',
                        colorDescr : 'Green'
                    }, {
                        img : 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021660000',
                        color : 'yellow',
                        colorDescr : 'Yellow'
                    }
                ],
                description : 'The iPhone 11 includes a dual-lens 12 MP rear camera array. It has one ƒ/2.4 ultra-wide-angle lens with a 120° field of view and 2× optical zoom out, and one ƒ/1.8 wide-angle lens. The iPhone 11 supports 4K video at up to 60 fps and 1080p slow motion at up to 240 fps.[7] The phone also features an audio zoom feature, which focuses audio on the area on which is being zoomed in, similar to the Pro model.[14] Both of the cameras support video, although only the primary lens has OIS. It supports portrait mode with six portrait lighting effects, depth control, and an advanced bokeh effect. The phone also has an automatic night mode allowing the camera to take brighter pictures with reduced noise in low-light environments. Also, a redesigned camera app adds new features such as a scroll wheel for choosing between the different lenses and a feature called "QuickTake".'
            }

        }
    ],
    compareProductsCount : 0,
    compareError : {
        status : false,
        title : null,
        text : null,
        type : null
    },
    cartProductsCount : 0,
    selectedProduct : null
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
        case ADD_IN_COMPARE:
            return {
                ...state,
                ...(state.compareProductsCount >= 5
                        ? {
                            compareError : {
                                ...state.compareError,
                                status : true,
                                text : 'A maximum of 5 items can be added to the comparison',
                                title : 'Warning',
                                type : 'warning'
                            }
                        }
                        : {
                            compareProductsCount : state.compareProductsCount + 1,
                            productsList : state.productsList.map( product => {
                                return product.id === action.id
                                    ? {
                                        ...product,
                                        productShortDescr : {
                                            ...product.productShortDescr,
                                            isCompare : true
                                        }
                                    }
                                    : product;
                            } )
                        }
                )
            };
        case REMOVE_FROM_COMPARE:
            return {
                ...state,
                compareProductsCount : state.compareProductsCount - 1,
                compareError : { ...state.compareError, status : false, text : null },
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
        case ADD_IN_CART:
            return {
                ...state,
                cartProductsCount : state.cartProductsCount + 1,
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
                cartProductsCount : state.cartProductsCount - 1,
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
        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                selectedProduct : action.id
            };
        default:
            return state;
    }
};

const addNewProductAC = data => ({ type : ADD_NEW_PRODUCT, data });
const addInCompareAC = id => ({ type : ADD_IN_COMPARE, id });
const removeFromCompareAC = id => ({ type : REMOVE_FROM_COMPARE, id });
const addInCartAC = id => ({ type : ADD_IN_CART, id });
const removeFromCartAC = id => ({ type : REMOVE_FROM_CART, id });
const getProductByIdAC = id => ({ type : GET_PRODUCT_BY_ID, id });

export const addNewProduct = data => dispatch => {
    dispatch( addNewProductAC( data ) );
};

export const addInCompare = productId => dispatch => {
    dispatch( addInCompareAC( productId ) );
};
export const removeFromCompare = productId => dispatch => {
    dispatch( removeFromCompareAC( productId ) );
};
export const addInCart = productId => dispatch => {
    dispatch( addInCartAC( productId ) );
};
export const removeFromCart = productId => dispatch => {
    dispatch( removeFromCartAC( productId ) );
};


export default productsReducer;

