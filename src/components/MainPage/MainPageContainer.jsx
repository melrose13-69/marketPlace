import { compose } from 'redux';
import { connect } from 'react-redux';
import MainPage from './MainPage';



const mapStateToProps = state => {
    return {
        productList: state.products.productsList.sort((a, b) => b.productShortDescr.price - a.productShortDescr.price).slice(0, 3)
    }
};

export default compose(
    connect(mapStateToProps, {})
)(MainPage)