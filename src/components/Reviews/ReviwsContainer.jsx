import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Reviews from './Reviews';
import { dislike, like } from '../../redux/reviews-reducer';

const ReviewsContainer = ({reviews, like, dislike}) => {
    return (
        <Reviews productReviews={reviews} dislike={dislike} like={like}/>
    )
};


const mapStateToProps = state => {
    return {
        reviews: state.reviews,
    }
};


export default compose(
    connect(mapStateToProps, {like, dislike})
)(ReviewsContainer);