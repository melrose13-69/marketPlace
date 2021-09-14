import React, { useState } from 'react';
import s from './Reviews.module.scss';
import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel/slick/slick.scss';
import Review from './Review/Review';
import Button from '../common/Button/Button';
import ModalReviews from '../common/Modal/ModalReviews/ModalReviews';


const Reviews = ( { averageRating, productReviews, like, dislike, addReview, productId } ) => {
    const [ modalSettings, setModalSettings ] = useState( { open: false, type: '', reviewId: null } );


    const onAddNewReview = formData => {
        addReview( formData );
        setModalSettings( { open: false, type: '', reviewId: null } );
    };
    return (
        <div className={ `${ s.wrapper } section` }>
            <div className={ s.aside }>
                <div>
                    <span>Average rating</span>
                    <span>{ averageRating.toFixed( 1 ) }</span>
                </div>
                <div>
                    <span onClick={ () => {setModalSettings( { open: true, type: 'new', reviewId: null } );} }>
                        <Button to='empty' text='Add new review'/>
                    </span>
                </div>
                <ModalReviews modalSettings={ modalSettings }
                              setModalSettings={ setModalSettings }
                              productId={ productId }
                              onClose={ setModalSettings }
                              onSubmit={ onAddNewReview }
                />
            </div>
            <div className={ s.inner }>
                {
                    productReviews.reviews.map( r =>
                        <Review key={ r.id }
                                reviewId={ r.id }
                                answer={ r.answer }
                                from={ r.from }
                                rating={ r.rating }
                                text={ r.text }
                                likes={ r.likes }
                                likeStatus={ r.likeStatus }
                                like={ like }
                                dislike={ dislike }
                                productId={ productId }
                                setModalSettings={ setModalSettings }
                        />
                    ).reverse()
                }
            </div>
        </div>
    );
};

export default Reviews;