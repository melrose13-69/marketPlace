import React from 'react';
import s from './MainPage.module.scss';
import Preview from './Preview/Preview';
import Arrivals from './Arrivals/Arrivals';
import Gallery from './Gallery/Gallery';
import PopularItems from './PopularItems/PopularItems';

const MainPage = props => {
    return (
        <div className={ s.inner }>
            <Preview/>
            <Arrivals/>
            <Gallery/>
            <PopularItems/>
        </div>
    );
};

export default MainPage;