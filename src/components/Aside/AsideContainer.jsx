import { connect } from 'react-redux';
import { compose } from 'redux';
import Aside from './Aside';



const filterArrForAside = ( arrFormFilter, obj, el ) => {
    const arr = [];
    arrFormFilter.map( product => arr.push(product[obj][el]));
    return arr.reduce((acc, elem) => {
        acc[elem] = (acc[elem] || 0) + 1;
        return acc;
    }, {});
};


const mapStateToProps = ( state ) => {
    return {
        aside: {
            diagonal: filterArrForAside( state.products.productsList, 'productDescr', 'diagonal'),
            ram: filterArrForAside( state.products.productsList, 'productDescr', 'ram'),
            memory: filterArrForAside( state.products.productsList, 'productDescr', 'memory'),
        }
    };
};

export default compose(
    connect( mapStateToProps, {} )
)( Aside );