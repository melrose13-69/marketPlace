import { connect } from 'react-redux';
import { compose } from 'redux';
import App from './App';


const mapStateToProps = state => {
    return {

    };
};

export default compose(
    connect( mapStateToProps, {} )
)( App );