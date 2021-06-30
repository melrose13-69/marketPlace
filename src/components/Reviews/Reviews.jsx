import React from 'react';
import s from './Reviews.module.scss';
import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel/slick/slick.scss';
import Review from './Review/Review';


const Reviews = ( {productReviews, like, dislike} ) => {
    const averageRating = productReviews.reviews.map( p => {
        return p.rating;
    } ).reduce( ( acc, val ) => acc + val );

    return (
        <div className={ `${s.wrapper} section` }>
            <div className={s.aside}>
                <div>
                    <span>Average rating</span>
                    <span>{averageRating}</span>
                </div>
            </div>
            <div className={s.inner}>
                {
                    productReviews.reviews.map(r =>
                        <Review key={r.id} {...r} like={like} dislike={dislike}/>
                    )
                }
            </div>
        </div>
    );
};

export default Reviews;