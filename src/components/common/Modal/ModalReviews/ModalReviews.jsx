import React, {useState} from 'react';
import { Rating } from '@material-ui/lab';
import { useForm } from 'react-hook-form';
import { Input, TextareaAutosize, Tooltip } from '@material-ui/core';
import s from './ModalReviews.module.scss';
import Button from '../../Button/Button';


const ModalReviews = () => {
    const { register, handleSubmit } = useForm();
    const [ratingEventVal, setRatingEventVal] = useState();

    const onSubmitHandler = ( data ) => {
        data = {
            ...data,
            rating : data.rating === undefined ? 5 : parseInt( data.rating )
        };
        console.log( data );
    };

    return (
        <form onSubmit={ handleSubmit( handleSubmit( onSubmitHandler ) ) }>
            <div className={ s.input }>
                <Input { ...register( 'from' ) } placeholder='First name' label='asd' autoFocus={ true } required={ true }/>

            </div>
            <div className={ s.textarea }>
                <TextareaAutosize { ...register( 'text' ) } required={ true } rowsMin={ 5 }/>
            </div>
            <div className={ s.rating }>
                <Tooltip title={ratingEventVal} placement="top">
                    <Rating { ...register( 'rating' ) } onChangeActive={ ( e, val ) => {setRatingEventVal( val );} }/>
                </Tooltip>
            </div>
            <Button to='empty' text='Send review' type='Submit'/>
        </form>
    );
};
export default ModalReviews;