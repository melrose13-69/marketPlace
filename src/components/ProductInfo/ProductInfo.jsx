import React, { useEffect, useState } from 'react';
import s from './ProductInfo.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel/slick/slick.scss';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import LoaderComponent from '../common/Loaders/Loader';
import Button from '../common/Button/Button';


const ProductInfo = ( { productMoreDescription, productShortDescr, id, addInCart, removeFromCart } ) => {
    const [colorIndex, setColorIndex] = useState( 0 );
    const [waitForSlide, setWaitForSlide] = useState( false );
    const [colorString, setColorString] = useState( productMoreDescription.images[0].colorDescr );
    const [price, setPrice] = useState( parseInt( productShortDescr.price ) );
    const [productCount, setProductCount] = useState( 1 );
    const slider = React.createRef();
    const loaderSettings = {
        type : 'TailSpin',
        color : '#ffffff',
        height : '20px',
        width : '20px',
        timeout : 5000
    };
    const sliderSettings = {
        dots : true,
        arrow : false,
        infinite : true,
        touchMove : false,
        speed : 500,
        slidesToShow : 1,
        slidesToScroll : 1,
        slideIndex : 0,
        beforeChange : ( currentSlideIndex, nextSlideIndex ) => {
            setColorIndex( nextSlideIndex );
        },
        afterChange : ( slideIndex ) => {
            setWaitForSlide( false );
        }

    };

    const changeColor = ( i, colorName ) => {
        setColorIndex( i );
        setColorString( colorName );
    };
    const plusCounter = () => {
        productCount < 20 && setProductCount( productCount + 1 );
    };
    const minusCounter = () => {
        productCount > 1 && setProductCount( productCount - 1 );
    };
    useEffect( () => {
        slider.current.slickGoTo( colorIndex );
        setWaitForSlide( true );
    }, [colorIndex] );

    useEffect( () => {
        setWaitForSlide( false );
    }, [] );
    useEffect( () => {
        setPrice( productShortDescr.price * productCount );
    }, [productCount] );
    return (
        <div className={ `${s.wrapper} section` }>
                <h1>{ productShortDescr.name }</h1>
                <div className={ s.inner }>
                    <div className={ s.img }>
                        <Slider { ...sliderSettings } ref={ slider }>
                            {
                                productMoreDescription.images.map( ( img, i ) =>
                                    <div key={ i }><img src={ img.img } alt='image'/></div>
                                )
                            }
                        </Slider>
                    </div>
                    <div className={ s.info }>
                        <div className={ s.priceWrapper }>
                            <div className={ s.price }>$ { price }</div>
                            <div className={ s.controls }>
                                <button onClick={ () => {minusCounter();} }>-</button>
                                <input readonly={ 'readonly' } disabled value={ productCount } type='text'/>
                                <button onClick={ () => {plusCounter();} }>+</button>
                            </div>
                        </div>
                        <div className={ s.colors }>
                            {
                                productMoreDescription.images.map( ( img, imgIndex ) =>
                                    colorIndex === imgIndex
                                        ?
                                        <button onClick={ () => {changeColor( imgIndex, img.colorDescr );} } style={ { background : `${img.color}` } }>
                                            <span><DoneOutlineIcon/></span>
                                        </button>
                                        :
                                        <button disabled={ waitForSlide } onClick={ () => {changeColor( imgIndex, img.colorDescr );} } style={ { background : `${img.color}` } }>
                                            { waitForSlide === true &&
                                            <span><LoaderComponent loaderSettings={ loaderSettings }/></span> }
                                        </button>
                                )
                            }
                            <div className={ s.colorName }>{ colorString }</div>
                        </div>
                        <div className={ s.targets }>
                            <div className={ s.infoTarget }>
                                <span>Display diagonal: </span><span>{ productShortDescr.diagonal }</span>
                            </div>
                            <div className={ s.infoTarget }>
                                <span>RAM: </span><span>{ productShortDescr.ram }</span>
                            </div>
                            <div className={ s.infoTarget }>
                                <span>Memory: </span><span>{ productShortDescr.memory }</span>
                            </div>
                            <div className={ s.infoTarget }>
                                <span>Camera: </span><span>{ productShortDescr.mainCamera }</span>
                            </div>
                            <div className={ s.infoTarget }>
                                <span>CPU: </span><span>{ productShortDescr.cpu }</span>
                            </div>
                            <div className={ s.description }>
                                <span>Description</span><span>{ productMoreDescription.description }</span>
                            </div>
                        </div>
                        <div className={ s.button }>
                            {
                                productShortDescr.isInCart
                                    ?
                                    <span onClick={ () => {removeFromCart( id );} }>
                                        <Button text={ 'Remove from cart' } to={ 'empty' }/>
                                    </span>
                                    :
                                    <span onClick={ () => {addInCart( id );} }>
                                        <Button text={ 'Add in cart' } to={ 'empty' }/>
                                    </span>
                            }
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ProductInfo;