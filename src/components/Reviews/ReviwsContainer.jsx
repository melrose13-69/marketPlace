import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Reviews from './Reviews';
import { addNewReview, dislike, like } from '../../redux/reviews-reducer';
import { useParams } from 'react-router-dom';


const ReviewsContainer = ( { reviews, like, dislike, averageRating, addNewReview } ) => {

    return (
        <Reviews addNewReview={ addNewReview } averageRating={ averageRating } productReviews={ reviews } dislike={ dislike } like={ like }/>
    );
};

const mapStateToProps = state => {
    return {
        reviews : state.reviews,
        averageRating : state.reviews.reviews.map( p => p.rating ).reduce( ( acc, val ) => (acc + val) ) / state.reviews.reviews.length
    };
};

export default compose(
    connect( mapStateToProps, { like, dislike, addNewReview } )
)( ReviewsContainer );