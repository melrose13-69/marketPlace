import React, { useState } from 'react';
import s from './Reviews.module.scss';
import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel/slick/slick.scss';
import Review from './Review/Review';
import Button from '../common/Button/Button';
import { makeStyles } from '@material-ui/core/esm/styles';
import Modal from '@material-ui/core/esm/Modal/Modal';
import Backdrop from '@material-ui/core/es/Backdrop/Backdrop';
import Fade from '@material-ui/core/es/Fade/Fade';
import ModalReviews from '../common/Modal/ModalReviews/ModalReviews';


const useStyles = makeStyles( ( theme ) => ({
    modal : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    },
    paper : {
        backgroundColor : theme.palette.background.paper,
        border : '2px solid #000',
        boxShadow : theme.shadows[5],
        padding : theme.spacing( 2, 4, 3 )
    }
}) );

const Reviews = ( { averageRating, productReviews, like, dislike, addNewReview } ) => {
    const classes = useStyles();
    const [open, setOpen] = useState( false );


    const onAddNewReview = formData => {
        addNewReview(formData);
        setOpen(false)
    };
    return (
        <div className={ `${s.wrapper} section` }>
            <div className={ s.aside }>
                <div>
                    <span>Average rating</span>
                    <span>{ averageRating.toFixed(1) }</span>
                </div>
                <div>
                    <span onClick={ () => {setOpen( true );} }>
                        <Button to='empty' text='Add new review'/>
                    </span>
                </div>
                <Modal aria-labelledby={ 'transition-modal-title' }
                       aria-describedby={ 'transition-modal-description' }
                       className={ classes.modal }
                       open={ open }
                       onClose={ () => {setOpen( false );} }
                       closeAfterTransition
                       BackdropComponent={ Backdrop }
                       BackdropProps={ {
                           timeout : 500
                       } }>
                    <Fade in={ open }>
                        <div className={ classes.paper }>
                            <ModalReviews onClose={setOpen} onSubmit={onAddNewReview}/>
                        </div>
                    </Fade>
                </Modal>
            </div>
            <div className={ s.inner }>
                {
                    productReviews.reviews.map( r =>
                        <Review key={ r.id }
                                id={ r.id }
                                answer={ r.answer }
                                from={ r.from }
                                rating={ r.rating }
                                text={ r.text }
                                likes={ r.likes }
                                likeStatus={ r.likeStatus }
                                like={ like }
                                dislike={ dislike }/>
                    )
                }
            </div>
        </div>
    );
};

export default Reviews;