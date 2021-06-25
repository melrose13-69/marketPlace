import React from 'react';
import './App.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import FooterContainer from './components/Footer/FooterContainer';
import { Route } from 'react-router-dom';
import ProductsShopContainer from './components/Products/ProductsShopContainer';
import ProductInfoContainer from './components/ProductInfo/ProductInfoContainer';
import ControlPanelContainer from './components/ControlPanel/ControlPanelContainer';
import MainPageContainer from './components/MainPage/MainPageContainer';


const App = () => {
    return (
        <div className='marketWrapper'>
            <HeaderContainer/>
            <main>
                <Route path='/main' render={ () => <MainPageContainer/> }/>
                <Route path='/shop' render={ () => <ProductsShopContainer/> }/>
                <Route path='/product' render={ () => <ProductInfoContainer/> }/>
                <Route path='/settings' render={ () => <ControlPanelContainer/> }/>
            </main>
            <FooterContainer/>
        </div>
    );
};

export default App;
