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
                        <NavLink to={'/main'}><span>My</span><span>Logo</span></NavLink>
                    </div>
                    <div className={s.nav}>
                        <ul className={s.list}>
                            <li><NavLink to={ '/main' }>Main</NavLink></li>
                            <li><NavLink to={ '/shop' }>Shop</NavLink></li>
                            <li><NavLink to={ '/settings' }>Control panel</NavLink></li>
                            <li><NavLink to={ '/contact' }>Contact</NavLink></li>
                        </ul>
                        <ul className={s.controls}>
                            <li>
                                <NavLink to={'/compare'}><CompareIcon/></NavLink>
                                <span>1</span>
                            </li>
                            <li>
                                <NavLink to={'/basket'}><ShoppingCartIcon/></NavLink>
                                <span>3</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;