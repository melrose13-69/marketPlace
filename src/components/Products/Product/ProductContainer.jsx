import React from 'react';
import {connect} from "react-redux";
import { compose } from 'redux';
import Product from './Product';

const mapStateToProps = (state) => {
    return {

    }
};

export default compose(
    connect(mapStateToProps, {})
)(Product);