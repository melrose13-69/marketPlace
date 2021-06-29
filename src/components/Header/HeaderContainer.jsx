import Header from "./Header";
import { compose } from 'redux';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        compareCount: state.products.compareProductsCount,
        cartCount: state.products.cartProductsCount,
        compareError: state.products.compareError
    }
};

export default compose(
    connect(mapStateToProps, {})
)(Header);