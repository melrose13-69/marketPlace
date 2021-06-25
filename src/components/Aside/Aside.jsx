import React from 'react';
import s from './Aside.module.scss';
import '../../globalStyles/global.scss';
import CustomCheckbox from '../common/CustomCheckbox';


const Aside = ( props ) => {

    const objectMap = ( obj ) => {
        return Object.keys( obj ).map( ( item, i ) => {
            return (
                <CustomCheckbox obj={obj} item={item} key={ i } />
            );
        } );
    };

    return (
        <aside className={ `${s.aside} sticky-container` }>
            <div className={ s.inner }>
                { objectMap( props.aside.diagonal ) }
                { objectMap( props.aside.ram ) }
                { objectMap( props.aside.memory ) }
                <button>Filter</button>
            </div>
        </aside>
    );
};

export default Aside;