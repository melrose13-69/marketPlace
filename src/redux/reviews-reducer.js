const LIKE = 'LIKE';
const DISLIKE = 'DISLIKE';
const ADD_REVIEW = 'ADD_REVIEW';

const initialState = {
    id : 88,
    reviews : [
        {
            id : 1020001,
            from : 'Alena',
            answer : {
                type : true,
                from : 'Alesea',
                text : 'a123333333333333333333222222222222222222222'
            },
            text : 'asdasdasdsadasd12321312dasdsadsad',
            rating : 3,
            likes : 12,
            likeStatus : {
                like : false,
                dislike : false
            }
        },
        {
            id : 1020002,
            from : 'Andrey',
            answer : {
                type : false
            },
            text : 'asdasdasdsadasd12321312dasdsadsad',
            rating : 2,
            likes : 12,
            likeStatus : {
                like : false,
                dislike : false
            }
        },
        {
            id : 1020003,
            from : 'Andrey',
            answer : {
                type : false
            },
            text : 'asdasdasdsadasd12321312dasdsadsad',
            rating : 4,
            likes : 12,
            likeStatus : {
                like : false,
                dislike : false
            }
        }
    ]
};

const reviewsReducer = ( state = initialState, action ) => {

    switch( action.type ) {
        case LIKE:
            return {
                ...state,
                reviews : state.reviews.map( r => r.id === action.id ? {
                    ...r,
                    likes : r.likes + 1,
                    likeStatus : {
                        ...r.likeStatus,
                        like : true,
                        dislike : false
                    }
                } : r )
            };
        case DISLIKE:
            return {
                ...state,
                reviews : state.reviews.map( r => r.id === action.id ? {
                    ...r,
                    likeStatus : {
                        ...r.likeStatus,
                        like : false,
                        dislike : true
                    }
                } : r )
            };
        case ADD_REVIEW:
            return {
                ...state,
                reviews : [
                    ...state.reviews,
                    {
                        id : state.reviews[state.reviews.length - 1].id + 1,
                        from : action.data.from,
                        answer : {
                            type : false
                        },
                        text : action.data.text,
                        rating : action.data.rating,
                        likes : 0,
                        likeStatus : {
                            like : false,
                            dislike : false
                        }
                    }
                ]
            };
        default:
            return state;
    }
};

const likeAC = id => ({ type : LIKE, id });
const dislikeAC = id => ({ type : DISLIKE, id });
const addNewReviewAC = data => ({ type : ADD_REVIEW, data });

export const like = reviewId => dispatch => {
    dispatch( likeAC( reviewId ) );
};
export const dislike = reviewId => dispatch => {
    dispatch( dislikeAC( reviewId ) );
};
export const addNewReview = data => dispatch => {
    dispatch( addNewReviewAC( data ) );
};

export default reviewsReducer;

