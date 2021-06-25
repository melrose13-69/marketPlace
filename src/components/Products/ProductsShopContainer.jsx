import ProductsShop from './ProductsShop';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { changePage, changePageSize, changeSort } from '../../redux/sortProducts-reducer';
import { addInCart, addInCompare, removeFromCart, removeFromCompare } from '../../redux/products-reducer';


const mapStateToProps = state => {
    return {
        productsList : state.products.productsList,
        pageControls: state.sort.pageControls,
        totalProducts: state.products.productsList.length
    };
};

export default compose(
    connect( mapStateToProps, {changePage, changePageSize, changeSort, addInCart, removeFromCart, addInCompare, removeFromCompare} )
)( ProductsShop );