const LIKE = 'LIKE';
const DISLIKE = 'DISLIKE';
const ADD_REVIEW = 'ADD_REVIEW';
const REPLY_REVIEW = 'REPLY_REVIEW';
const ADD_REVIEW_FOR_NEW_PRODUCT = 'ADD_REVIEW_FOR_NEW_PRODUCT';

const initialState = {
    reviewsList: [
        {
            id: 1,
            reviews: [
                {
                    id: 11,
                    from: '1',
                    answer: {
                        type: true,
                        from: 'Alesea',
                        text: 'a123333333333333333333222222222222222222222'
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 3,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 12,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 2,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 13,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 4,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                }
            ]
        },
        {
            id: 2,
            reviews: [
                {
                    id: 21,
                    from: '2',
                    answer: {
                        type: true,
                        from: 'Alesea',
                        text: 'a123333333333333333333222222222222222222222'
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 3,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 22,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 2,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 23,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 4,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                }
            ]
        },
        {
            id: 3,
            reviews: [
                {
                    id: 31,
                    from: '3',
                    answer: {
                        type: true,
                        from: 'Alesea',
                        text: 'a123333333333333333333222222222222222222222'
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 3,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 32,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 2,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 33,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 4,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                }
            ]
        },
        {
            id: 4,
            reviews: [
                {
                    id: 41,
                    from: '4',
                    answer: {
                        type: true,
                        from: 'Alesea',
                        text: 'a123333333333333333333222222222222222222222'
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 3,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 42,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 2,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 43,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 4,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                }
            ]
        },
        {
            id: 5,
            reviews: [
                {
                    id: 51,
                    from: '5',
                    answer: {
                        type: true,
                        from: 'Alesea',
                        text: 'a123333333333333333333222222222222222222222'
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 3,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 52,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 2,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 53,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 4,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                }
            ]
        },
        {
            id: 6,
            reviews: [
                {
                    id: 61,
                    from: '6',
                    answer: {
                        type: true,
                        from: 'Alesea',
                        text: 'a123333333333333333333222222222222222222222'
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 3,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 62,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 2,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 63,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 4,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                }
            ]
        },
        {
            id: 7,
            reviews: [
                {
                    id: 71,
                    from: '7',
                    answer: {
                        type: true,
                        from: 'Alesea',
                        text: 'a123333333333333333333222222222222222222222'
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 3,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 72,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 2,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 73,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 4,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                }
            ]
        },
        {
            id: 8,
            reviews: [
                {
                    id: 81,
                    from: '8',
                    answer: {
                        type: true,
                        from: 'Alesea',
                        text: 'a123333333333333333333222222222222222222222'
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 3,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 82,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 2,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 83,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 4,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                }
            ]
        },
        {
            id: 9,
            reviews: [
                {
                    id: 91,
                    from: '9',
                    answer: {
                        type: true,
                        from: 'Alesea',
                        text: 'a123333333333333333333222222222222222222222'
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 3,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 92,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 2,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 93,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 4,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                }
            ]
        },
        {
            id: 10,
            reviews: [
                {
                    id: 101,
                    from: '10',
                    answer: {
                        type: true,
                        from: 'Alesea',
                        text: 'a123333333333333333333222222222222222222222'
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 3,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 102,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 2,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 103,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 4,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                }
            ]
        },
        {
            id: 11,
            reviews: [
                {
                    id: 111,
                    from: '11',
                    answer: {
                        type: true,
                        from: 'Alesea',
                        text: 'a123333333333333333333222222222222222222222'
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 3,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 112,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 2,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 113,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 4,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                }
            ]
        },
        {
            id: 12,
            reviews: [
                {
                    id: 121,
                    from: '12',
                    answer: {
                        type: true,
                        from: 'Alesea',
                        text: 'a123333333333333333333222222222222222222222'
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 3,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 122,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 2,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 123,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 4,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                }
            ]
        },
        {
            id: 13,
            reviews: [
                {
                    id: 131,
                    from: '13',
                    answer: {
                        type: true,
                        from: 'Alesea',
                        text: 'a123333333333333333333222222222222222222222'
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 3,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 132,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 2,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 133,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 4,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                }
            ]
        },
        {
            id: 14,
            reviews: [
                {
                    id: 141,
                    from: '14',
                    answer: {
                        type: true,
                        from: 'Alesea',
                        text: 'a123333333333333333333222222222222222222222'
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 3,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 142,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 2,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                },
                {
                    id: 143,
                    from: 'Andrey',
                    answer: {
                        type: false
                    },
                    text: 'asdasdasdsadasd12321312dasdsadsad',
                    rating: 4,
                    likes: 12,
                    likeStatus: {
                        like: false,
                        dislike: false
                    }
                }
            ]
        },
    ]
};

const reviewsReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case LIKE:
            return {
                ...state,
                reviewsList: state.reviewsList.map( reviews => {
                    return reviews.id === action.productId
                        ? {
                            ...reviews,
                            reviews: reviews.reviews.map( review => {
                                return review.id === action.reviewId
                                    ? {
                                        ...review,
                                        likeStatus: {
                                            ...review.likeStatus,
                                            like: true,
                                            dislike: false
                                        }
                                    }
                                    : review;
                            } )
                        }
                        : reviews;
                } ),
            };
        case DISLIKE:
            return {
                ...state,
                reviewsList: state.reviewsList.map( reviews => {
                    return reviews.id === action.productId
                        ? {
                            ...reviews,
                            reviews: reviews.reviews.map( review => {
                                return review.id === action.reviewId
                                    ? {
                                        ...review,
                                        likeStatus: {
                                            ...review.likeStatus,
                                            like: false,
                                            dislike: true
                                        }
                                    }
                                    : review;
                            } )
                        }
                        : reviews;
                } ),
            };
        case ADD_REVIEW:
            return {
                ...state,
                reviewsList: state.reviewsList.map( review => {
                    return review.id === +action.data.productId
                        ? {
                            ...review,
                            reviews: [
                                ...review.reviews,
                                {
                                    id: review.reviews[ review.reviews.length - 1 ].id + 1,
                                    from: action.data.from,
                                    answer: {
                                        type: false
                                    },
                                    text: action.data.text,
                                    rating: action.data.rating,
                                    likes: 0,
                                    likeStatus: {
                                        like: false,
                                        dislike: false
                                    }
                                }
                            ]
                        }
                        : review;
                } )
            };
        case REPLY_REVIEW:
            return {
                ...state,
                reviewsList: state.reviewsList.map( reviews => {
                    return reviews.id === action.data.productId
                        ? {
                            ...reviews,
                            reviews: reviews.reviews.map( review => {
                                return review.id === action.data.reviewId
                                    ? {
                                        ...review,
                                        answer: {
                                            ...review.answer,
                                            type: true,
                                            from: action.data.from,
                                            text: action.data.text
                                        },
                                    }
                                    : review;
                            } )
                        }
                        : reviews;
                } ),
            };
        case ADD_REVIEW_FOR_NEW_PRODUCT:
            return {
                ...state,
                reviewsList: [
                    ...state.reviewsList,
                    {
                        id: action.productId,
                        reviews: []
                    },
                ]
            };
        default:
            return state;
    }
};

const likeAC = ( reviewId, productId ) => ({ type: LIKE, reviewId, productId });
const dislikeAC = ( reviewId, productId ) => ({ type: DISLIKE, reviewId, productId });
const addNewReviewAC = data => ({ type: ADD_REVIEW, data });
const replyToReviewAC = data => ({ type: REPLY_REVIEW, data });
const addReviewDataFromNewProductAC = productId => ({type: ADD_REVIEW_FOR_NEW_PRODUCT, productId})
export const addReviewDataFromNewProduct = productId => dispatch => {
      dispatch(addReviewDataFromNewProductAC(productId))
};
export const like = ( reviewId, productId ) => dispatch => {
    dispatch( likeAC( reviewId, productId ) );
};
export const dislike = ( reviewId, productId ) => dispatch => {
    dispatch( dislikeAC( reviewId, productId ) );
};
export const addReview = data => dispatch => {
    if ( data.type === 'new' ) {
        dispatch( addNewReviewAC( data ) );
    }
    if ( data.type === 'answer' ) {
        dispatch( replyToReviewAC( data ) );
    }
};


export default reviewsReducer;

