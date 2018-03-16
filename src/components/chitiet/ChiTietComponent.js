import React, { Component } from 'react';
import Button from 'react-native-button';
import {ImageModal} from '../../../commons/screenNames';
import { NavigationActions } from "react-navigation";
import {
    Text, View, Image, Alert, Platform, TextInput, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity, Dimensions, TouchableHighlight
} from 'react-native';

export default class ChiTietComponent extends Component {

    static navigationOptions = {
        title: "NỘI DUNG GÓP Ý"
      };  
    constructor(props) {
        super(props);
        this.state = ({
            refreshing: false,
        });
    }
    componentWillMount() {
    }
    goToModal = () => {
        const goToModal = NavigationActions.navigate({
          routeName: ImageModal,
        });

      
    }; 
    render() {
        const widthScreen = Dimensions.get('window').width;
        const heightScreen = Dimensions.get('window').height;
        const item = this.props.navigation.state.params;
        let urlImage = "";
        const imageURI = (mItem) => {
            let url = mItem.hinhAnh;
            if(url.length > 0 && url != null){
                let urlImg = url.substring(2, url.length );
                let tempUrl = urlImg.replace("dichvucong.dtt","danang.gov");
                urlImage = tempUrl.replace(".egov","").split("?");
                console.log(`url: ${urlImage[0]}`)
                return urlImage[0];
            }else{
                return "https://facebook.github.io/react/logo-og.png"
            }
            
        };
        return (
            <View style={{ flex: 1, backgroundColor: "powderblue" }}>
                <TouchableOpacity onPress={ () => {
                    this.goToModal()
                }}>
                    <Image 
                        source={{uri: imageURI(item)}}
                        style={{width: widthScreen, height:1/3*heightScreen}}
                    />
                </TouchableOpacity>
                <Text style={{backgroundColor: item.mauNen,textAlign:'center', fontSize:15, fontWeight:'bold', color:'white'}}>{item.tenCoQuan}</Text>
                <Text style={{marginLeft:10, fontSize:15, fontWeight:'bold', marginTop:10}}>{item.tieuDe}</Text>
                <Text style={{marginLeft:10, fontSize:13,  marginTop:10, shadowColor:0.2}}>Ngày phản ánh: <Text style={{fontSize:13,  marginTop:10,}}>{item.thoiGianDienRa} {item.ngayDienRa}</Text></Text>
                <Text style={{marginLeft:10, fontSize:13,  marginTop:10, shadowColor:0.2}}>Địa điểm: <Text style={{fontSize:13,  marginTop:10,}}>{item.diaDiem}</Text></Text>
                <Text style={{marginLeft:10, fontSize:13, marginTop:10}}>Không cung cấp nội dung mà bắt t gọi api củ chuối này làm gi thế? Mệt thía pòa nụi</Text>
            </View>)
    }
}