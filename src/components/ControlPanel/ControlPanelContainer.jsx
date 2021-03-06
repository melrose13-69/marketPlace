import { connect } from 'react-redux';
import { compose } from 'redux';
import ControlPanel from './ControlPanel';
import { addNewProduct } from '../../redux/products-reducer';


const mapStateToProps = ( state ) => {
    return {

    };
};

export default compose(
    connect( mapStateToProps, { addNewProduct } )
)( ControlPanel );
