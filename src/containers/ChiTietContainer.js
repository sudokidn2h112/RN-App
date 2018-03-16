import { connect } from 'react-redux';
import ChiTietComponent from '../components/chitiet/ChiTietComponent';

//Actions ?
import {  navToChiTiet} from '../actions';
function mapStateToProps({ yKienReducers }, ownProps) {
    return {
        listYKien: yKienReducers.dataSource
    };
  }
  
const mapDispatchToProps = (dispatch) => {
    return {    
        onNavChiTiet: () => {                     
            dispatch(navToChiTiet());
        }, 
    };
}
const ChiTietContainer = connect(mapStateToProps, mapDispatchToProps)(ChiTietComponent);
export default ChiTietContainer;