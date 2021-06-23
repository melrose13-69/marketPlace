import React from 'react';
import { NavLink } from 'react-router-dom';
import phonePreview from '../../../assets/img/preview-main-img.jpg'
import s from './Preview.module.scss';

const Preview = props => {
    return (
        <div className={ `${s.preview} section` }>
            <div className='container'>
                <div className={s.previewInner}>
                    <div className={s.previewInfo}>
                        <div><h1>Select a new smart phone</h1></div>
                        <div><p>New phone - new emotions</p></div>
                        <div className={s.button}><NavLink to={ '/shop' }><span>shop now</span></NavLink></div>
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