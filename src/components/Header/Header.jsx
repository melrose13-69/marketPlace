import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';
import CompareIcon from '@material-ui/icons/Compare';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = props => {
    return (
        <header>
            <div className='container'>
                <div className={s.inner}>
                    <div className={s.logo}>
                        <NavLink exact to={ '/' }><span>My</span><span>Logo</span></NavLink>
                    </div>
                    <div className={s.nav}>
                        <ul className={s.list}>
                            <li><NavLink exact to={ '/' } activeClassName={s.selected}>Main</NavLink></li>
                            <li><NavLink to={ '/shop' } activeClassName={s.selected}>Shop</NavLink></li>
                            {/*<li><NavLink to={ '/panel' } activeClassName={s.selected}>Control panel</NavLink></li>*/}
                        </ul>
                        <ul className={s.controls}>
                            <li>
                                <NavLink to={'/compare'}><CompareIcon/></NavLink>
                                <span>{props.compareCount}</span>
                            </li>
                            <li>
                                <NavLink to={'/basket'}><ShoppingCartIcon/></NavLink>
                                <span>{props.cartCount}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;