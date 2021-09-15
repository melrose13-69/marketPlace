import React from 'react';
import Button from '../Button/Button';





const NotFound = ({message, linkTo, btnText}) => {
    return (
        <div style={{display:'flex', width: '100%', justifyContent: 'space-between', flexDirection:'column', alignItems: 'center'}}>
            <h3 style={{fontSize: '20px', textAlign: 'center', margin: '20px 0', color: 'red'}}>{message}</h3>
            <Button to={linkTo} text={btnText}/>
        </div>
    )
};


export default NotFound