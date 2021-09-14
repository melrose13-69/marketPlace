import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Reviews from './Reviews';
import { addReview, dislike, like } from '../../redux/reviews-reducer';
import { requestToLS } from '../../api/localstorageRequest/requestToLS';
import { useParams } from 'react-router-dom';


const ReviewsContainer = ( { reviews, like, dislike, addReview } ) => {
    const { productId } = useParams();
    const reviewForProduct = reviews.filter( r => r.id === parseInt( productId ) )[ 0 ];
    const averageRating = reviewForProduct.reviews
                                          .map( p => p.rating )
                                          .reduce( ( acc, val ) => (acc + val) ) / reviewForProduct.reviews.length;

    if ( requestToLS.getItemFromLocalStorage( 'reviews' ) === null ) {
        requestToLS.postItemFromLocalStorage( 'reviews', reviews );
    }

    return (
        <Reviews productId={ productId }
                 addReview={ addReview }
                 averageRating={ averageRating }
                 productReviews={ reviewForProduct }
                 dislike={ dislike }
                 like={ like }/>
    );
};

const mapStateToProps = state => {
    return {
        reviews: state.reviews.reviewsList
    };
};

export default compose(
    connect( mapStateToProps, { like, dislike, addReview } )
)( ReviewsContainer );