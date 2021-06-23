import React from 'react';
import ControlPanelForm from './ControlPanelForm';


const ControlPanel = props => {

    const onSubmit = formData => {
        props.addNewProduct(formData)
    };

    return (
        <div>
            <h1>Add new product</h1>
            <ControlPanelForm onSubmit={ onSubmit }/>
        </div>
    );
};

export default ControlPanel;