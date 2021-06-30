const LIKE = 'LIKE';
const DISLIKE = 'DISLIKE';

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
        default:
            return state;
    }
};

const likeAC = id => ({ type : LIKE, id });
const dislikeAC = id => ({ type : DISLIKE, id });

export const like = reviewId => dispatch => {
    dispatch( likeAC( reviewId ) );
};
export const dislike = reviewId => dispatch => {
    dispatch( dislikeAC( reviewId ) );
};

export default reviewsReducer;

