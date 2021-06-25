import {connect} from "react-redux";
import { compose } from 'redux';
import ProductReview from './ProductReview';


const mapStateToProps = (state) => {
    return {}
};

export default compose(
    connect(mapStateToProps, {})
)(ProductReview);