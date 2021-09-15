import React, { useEffect, useState } from 'react';
import { createField, Input, Textarea } from '../common/FormsControls';
import { isValidHttpUrl, requiredField, isNumber } from '../utils/validators/validators';
import { reduxForm } from 'redux-form';
import Button from '../common/Button/Button';
import ImageBlock from './ImageBlock/ImageBlock';
import s from './ControlPanel.module.scss';


// const images = [];

const ControlPanelForm = ( { handleSubmit } ) => {
    const [ imageCount, setImageCount ] = useState( 0 );
    const [ images, setImages ] = useState( [] );

    useEffect( () => {
        setImages([...images,<ImageBlock imageCount={ imageCount }/>])
        // imageCount > 1 && images.push( <ImageBlock imageCount={ imageCount }/> );
    }, [ imageCount ] );

    return (
        <div className={s.formWrapper}>
            <form onSubmit={ handleSubmit }>
                <div className={s.formLine}>
                    { createField( [ requiredField, isValidHttpUrl ], {
                        type: 'text',
                        name: 'productMainImage'
                    }, 'Main image', Input ) }
                </div>
                <div className={s.formLine}>
                    { createField( [ requiredField ], { type: 'text', name: 'productName' }, 'Name', Input ) }
                </div>
                <div className={s.formLine}>
                    { createField( [ requiredField, isNumber ], { type: 'text', name: 'productDiagonal' }, 'Diagonal', Input ) }
                </div>
                <div className={s.formLine}>
                    { createField( [ requiredField, isNumber ], { type: 'text', name: 'productRam' }, 'RAM', Input ) }
                </div>
                <div className={s.formLine}>
                    { createField( [ requiredField, isNumber ], { type: 'text', name: 'productMemory' }, 'Memory', Input ) }
                </div>
                <div className={s.formLine}>
                    { createField( [ requiredField, isNumber ], { type: 'text', name: 'productCamera' }, 'Camera', Input ) }
                </div>
                <div className={s.formLine}>
                    { createField( [ requiredField ], { type: 'text', name: 'productCPU' }, 'CPU', Input ) }
                </div>
                <div className={s.formLine}>
                    { createField( [ requiredField, isNumber ], { type: 'text', name: 'productPrice' }, 'Price', Input ) }
                </div>
                <div className={s.formLine}>
                    { createField( [ requiredField ], { type: 'text', name: 'productDescr' }, 'Description', Textarea ) }
                </div>
                { images.map( el => el ) }
                <button type={ 'button' } onClick={ () => {setImageCount( imageCount + 1 );} }>+ image</button>
                <Button type={ 'submit' } text={ 'Add' } to={ 'empty' }/>
            </form>
        </div>
    );
};

export default reduxForm( {
    form: 'panel'
} )( ControlPanelForm );