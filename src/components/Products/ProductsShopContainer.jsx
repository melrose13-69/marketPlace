import ProductsShop from './ProductsShop';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { changePage, changePageSize, changeSort } from '../../redux/sortProducts-reducer';
import { addInCart, addInCompare, getProducts, removeFromCart, removeFromCompare } from '../../redux/products-reducer';


const mapStateToProps = state => {
    return {
        productsList : state.products.productsList,
        pageControls: state.sort.pageControls,
        totalProducts: state.products.productsList.length,
        compareError: state.products.compareError,
        compareProductsCount : state.products.compareProductsCount,
        cartProductsCount : state.products.cartProductsCount,
        selectedProduct : state.products.selectedProduct
    };
};

export default compose(
    connect( mapStateToProps, {changePage, changePageSize, changeSort, addInCompare, removeFromCompare, addInCart, removeFromCart, getProducts} )
)( ProductsShop );