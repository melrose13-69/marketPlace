import { compose } from 'redux';
import { connect } from 'react-redux';
import Compare from './Compare';
import { removeFromCompare } from '../../redux/products-reducer';


const mapStateToProps = (state) => {

    return {
        compareProducts: state.products.productsList.filter(p => p.productShortDescr.isCompare === true )
    }
};

export default compose(
    connect(mapStateToProps, {removeFromCompare})
)(Compare);