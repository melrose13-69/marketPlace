import React from 'react';
import './App.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import FooterContainer from './components/Footer/FooterContainer';
import { Route } from 'react-router-dom';
import ProductsShopContainer from './components/Products/ProductsShopContainer';
import ProductInfoContainer from './components/ProductInfo/ProductInfoContainer';
import ControlPanelContainer from './components/ControlPanel/ControlPanelContainer';
import MainPageContainer from './components/MainPage/MainPageContainer';
import CompareContainer from './components/Compare/CompareContainer';

import ReactNotification, { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'react-notifications-component/dist/scss/notification.scss';
import CartContainer from './components/Cart/CartContainer';


const App = props => {
    const handleNoti = (title, message, type) => {
        store.addNotification( {
            title : title,
            message : message,
            type : type,
            container : 'top-right',
            insert : 'top',
            slidingExit: {
                duration: 800,
                timingFunction: 'ease-out',
                delay: 0
            }
        } );
    };
    return (
        <div className='marketWrapper'>
            <HeaderContainer/>
            <ReactNotification/>
            <main>
                <Route path='/main' render={ () => <MainPageContainer/> }/>
                <Route path='/compare' render={ () => <CompareContainer/> }/>
                <Route path='/basket' render={ () => <CartContainer/> }/>
                <Route path='/shop' render={ () => <ProductsShopContainer handleNoti={handleNoti}/> }/>
                <Route path='/product/:productId' render={ () => <ProductInfoContainer/> }/>
                <Route path='/settings' render={ () => <ControlPanelContainer/> }/>
            </main>
            <FooterContainer/>
        </div>
    );
};

export default App;
