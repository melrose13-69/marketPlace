import { compose } from 'redux';
import { connect } from 'react-redux';
import Cart from './Cart';
import { removeFromCart } from '../../redux/products-reducer';


const mapStateToProps = (state) => {

    return {
        cartProducts: state.products.productsList.filter(p => p.productShortDescr.isInCart === true )
    }
};

export default compose(
    connect(mapStateToProps, {removeFromCart})
)(Cart);