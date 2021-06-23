import React from 'react';
import { createField, Input } from '../common/FormsControls';
import { requiredField } from '../utils/validators/validators';
import { reduxForm } from 'redux-form';


const ControlPanelForm = ( {handleSubmit} ) => {

    return (
        <form onSubmit={ handleSubmit }>
            <div>
                { createField( [requiredField], { type : 'text', name : 'productName' }, 'Title', Input ) }
            </div>
            <div>
                { createField( [requiredField], { type : 'text', name : 'productDiagonal' }, 'Diagonal', Input ) }
            </div>
            <div>
                { createField( [requiredField], { type : 'text', name : 'productRam' }, 'RAM', Input ) }
            </div>
            <div>
                { createField( [requiredField], { type : 'text', name : 'productMemory' }, 'Memory', Input ) }
            </div>
            <div>
                { createField( [requiredField], { type : 'text', name : 'productCamera' }, 'Camera', Input ) }
            </div>
            <div>
                { createField( [requiredField], { type : 'text', name : 'productCPU' }, 'CPU', Input ) }
            </div>
            <button>Add</button>
        </form>
    );
};

export default reduxForm( {
    form : 'panel'
} )( ControlPanelForm );