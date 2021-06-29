import React from 'react';
import s from './Button.module.scss';
import { NavLink } from 'react-router-dom';


const Button = props => {
    return (
        <div className={ s.button }>
            {
                props.to === 'empty'
                    ? <a href='#'><span>{ props.text }</span></a>
                    : <NavLink to={ props.to }><span>{ props.text }</span></NavLink>
            }
        </div>
    );
};

export default Button;