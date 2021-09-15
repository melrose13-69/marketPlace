import React from 'react';
import s from './CompareProduct.module.scss';
import { NavLink } from 'react-router-dom';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

const CompareProduct = ( {productInfo, removeFromCompare, productId} ) => {

    return (
        <div className={ `${s.product}` }>
            <div>
                <span onClick={() => {removeFromCompare(productId)}} className={s.removeFromCompare}><CloseOutlinedIcon /></span>
                <div className={ s.img } style={ { backgroundImage : `url(${productInfo.image})` } }>
                    <div className={ s.bg }>
                    </div>
                </div>
            </div>
            <div className={ s.info }>
                <div className={ `${s.infoTarget} ${s.priceName}` }>
                    <div className='product-name'>
                        <NavLink to={'/info'}>{productInfo.name}</NavLink>
                    </div>
                    <div className={ `${s.price} product-price` }>{`$ ${productInfo.price}`}</div>
                </div>
                <div className={ s.infoTarget }>{ productInfo.mainCamera }</div>
                <div className={ s.infoTarget }>{ productInfo.diagonal }</div>
                <div className={ s.infoTarget }>{ productInfo.memory }</div>
                <div className={ s.infoTarget }>{ productInfo.ram }</div>
                <div className={ `${s.infoTarget} ${s.processorName}` }>{ productInfo.cpu }</div>
            </div>
        </div>
    );
};

export default CompareProduct;