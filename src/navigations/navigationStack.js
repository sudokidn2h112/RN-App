import { StackNavigator } from "react-navigation";
import YKienComponent from "../components/ykien/YKienComponent";
import ChiTietComponent from "../components/chitiet/ChiTietComponent";
import {YKien, ChiTiet, } from '../../commons/screenNames';
import YKienContainer from '../containers/YKienContainer';
import ChiTietContainer from '../containers/ChiTietContainer';
import ModalImage from '../components/chitiet/ModalImage';

const navigator = StackNavigator({
  YKien: {
    screen: YKienContainer
  },
  ChiTiet: {
    screen: ChiTietContainer
  },
  ImageModal: {
    screen: ModalImage
  }
});

export default navigator;