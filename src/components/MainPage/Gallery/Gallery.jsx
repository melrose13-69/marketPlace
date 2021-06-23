import React, {useEffect, useState} from 'react';
import s from './Gallery.module.scss';


const Gallery = props => {
    const [width, setWidth] = useState(350);
    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth((window.innerWidth / 2.7) / 2)
        });
    }, [width]);

    return (
        <div className={s.gallery} style={{gridTemplateRows: `${width}px ${width}px`}}>
            <div className={s.imgWrapper}><div className={s.item}> </div></div>
            <div className={s.imgWrapper}><div className={s.item}> </div></div>
            <div className={s.imgWrapper}><div className={s.item}> </div></div>
            <div className={s.imgWrapper}><div className={s.item}> </div></div>
        </div>
    )
};

export default Gallery;