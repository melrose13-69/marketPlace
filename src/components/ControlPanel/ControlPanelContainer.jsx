import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ControlPanel from './ControlPanel';
import { addNewProduct } from '../../redux/products-reducer';


const mapStateToProps = ( state ) => {
    return {
        product : state.products.productsList,
        onSubmit : onSubmit
    };
};
const onSubmit = formData => {
    addNewProduct(formData);
};
export default compose(
    connect( mapStateToProps, { addNewProduct } )
)( ControlPanel );
