import React, { useState } from 'react';
import { Rating } from '@material-ui/lab';
import { useForm } from 'react-hook-form';
import { Input, TextareaAutosize, Tooltip } from '@material-ui/core';
import s from './ModalReviews.module.scss';
import Button from '../../Button/Button';
import { makeStyles } from '@material-ui/core/esm/styles';
import Backdrop from '@material-ui/core/es/Backdrop/Backdrop';
import Modal from '@material-ui/core/esm/Modal/Modal';
import Fade from '@material-ui/core/es/Fade/Fade';


const useStyles = makeStyles( ( theme ) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[ 5 ],
        padding: theme.spacing( 2, 4, 3 )
    }
}) );

const ModalReviews = props => {
    const classes = useStyles();
    const { register, handleSubmit } = useForm();
    const [ ratingEventVal, setRatingEventVal ] = useState();

    const onSubmitHandler = ( data ) => {
        data = {
            ...data,
            rating: data.rating === undefined ? 5 : +data.rating,
            productId: +props.productId,
            type: props.modalSettings.type,
            reviewId: +props.modalSettings.reviewId
        };
        props.onSubmit( data );
    };

    return (
        <Modal aria-labelledby={ 'transition-modal-title' }
               aria-describedby={ 'transition-modal-description' }
               className={ classes.modal }
               open={ props.modalSettings.open }
               onClose={ () => {props.setModalSettings( { open: false, type: '', reviewId: null } );} }
               closeAfterTransition
               BackdropComponent={ Backdrop }
               BackdropProps={ {
                   timeout: 500
               } }
        >
            <Fade in={ props.modalSettings.open }>
                <div className={ classes.paper }>
                    <form onSubmit={ handleSubmit( handleSubmit( onSubmitHandler ) ) }>
                        <div className={ s.input }>
                            <Input { ...register( 'from' ) } placeholder='First name' label='asd' autoFocus={ true }
                                   required={ true }/>

                        </div>
                        <div className={ s.textarea }>
                            <TextareaAutosize { ...register( 'text' ) } required={ true } rowsMin={ 5 }/>
                        </div>
                        {
                            props.modalSettings.type === 'new'
                                ? <div className={ s.rating }>
                                    <Tooltip title={ ratingEventVal } placement="top">
                                        <Rating { ...register( 'rating' ) }
                                                onChangeActive={ ( e, val ) => {setRatingEventVal( val );} }/>
                                    </Tooltip>
                                </div>
                                : <></>
                        }

                        <Button to='empty' text='Send review' type='Submit'/>
                    </form>
                </div>
            </Fade>
        </Modal>

    );
};
export default ModalReviews;