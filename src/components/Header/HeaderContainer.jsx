import React from 'react';
import Header from "./Header";
import { compose } from 'redux';
import { connect } from 'react-redux';


const mapStateToProps = () => {
    return {}
};

export default compose(
    connect(mapStateToProps, {})
)(Header);