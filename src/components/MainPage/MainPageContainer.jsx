import { compose } from 'redux';
import { connect } from 'react-redux';
import MainPage from './MainPage';


const mapStateToProps = state => {
    return {}
};

export default compose(
    connect(mapStateToProps, {})
)(MainPage)