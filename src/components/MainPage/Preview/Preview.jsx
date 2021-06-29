import React from 'react';
import phonePreview from '../../../assets/img/preview-main-img.jpg'
import s from './Preview.module.scss';
import Button from '../../common/Button/Button';

const Preview = props => {
    return (
        <div className={ `${s.preview} section` }>
            <div className='container'>
                <div className={s.previewInner}>
                    <div className={s.previewInfo}>
                        <div><h1>Select a new smart phone</h1></div>
                        <div><p>New phone - new emotions</p></div>
                        <Button to={'/shop'} text={'buy now'}/>
                    </div>
                    <div>
                        <img src={phonePreview} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Preview;