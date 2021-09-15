import React from 'react';
import ControlPanelForm from './ControlPanelForm';


const ControlPanel = props => {

    const onSubmit = formData => {
        const data = {};
        const images = {};
        data.images = [];
        for ( let key in formData ) {
            if ( formData.hasOwnProperty( key ) ) {
                if ( key[ 0 ] !== '%' ) {
                    data[ key ] = formData[ key ];
                } else {
                    images[ key ] = formData[ key ];
                }
            }
        }

        for ( let i = 0; i < Object.keys( images[ '%productImageColor' ] ).length; i++ ) {
            data.images.push( {
                link: images[ '%productImageLink' ][ i ],
                color: images[ '%productImageColor' ][ i ],
                descr: images[ '%productImageDescr' ][ i ],
            } );
        }

        props.addNewProduct( data );
    };

    return (
        <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '50px' } }>
            <h1>Add new product</h1>
            <ControlPanelForm onSubmit={ onSubmit }/>
        </div>
    );
};

export default ControlPanel;