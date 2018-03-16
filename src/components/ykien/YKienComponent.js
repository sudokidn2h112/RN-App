import React, { Component } from 'react';
import Button from 'react-native-button';
import YKienItem from './YKienItem';
import {
    Text, View, Image, Alert, Platform, TextInput, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity
} from 'react-native';

export default class YKienComponent extends Component {

    static navigationOptions = {
        title: "ỨNG DỤNG GÓP Ý"
      };    
      
    constructor(props) {
        super(props);
        this.state = ({
            refreshing: false,
        });
    }
    componentWillMount() {
        this.props.onFetchYKien('asc');
    }
    
    renderItem = ({ item, index }) => {
        const {navigation} = this.props;
        return <YKienItem mItem={item} itemIndex={index} yKienComponent={this} nav ={navigation} />
    }
    render() {
        return (
            <View style={{flexDirection:'column', flex:1}}>
            <View style={{flexDirection:'row', height:30, backgroundColor:"#bebebe"}}>
                <View style={{flex:1, alignItems:'center', flexDirection:'row'}}>
                   <TouchableOpacity style={{margin:10}} 
                        onPress={()=>{
                         
                        }}
                        > 
                    <Image source={require('../../../images/chuyen-muc-down.png')} style={{width:15, height:15,tintColor:'gray'}}/>
                    </TouchableOpacity>     
                    <Text style={{fontSize:15, color:'gray'}}>Chuyên mục</Text>              
                </View> 

                <View style={{flex:1, backgroundColor:'#bebebe', justifyContent:'center', alignItems:'flex-end', marginRight:10}}>
                    <Image source={require('../../../images/sort-desc.png')} style={{width:15, height:15,tintColor:'gray',tintColor:'gray'}}/>
                </View>    
            </View>
             <FlatList
                    data={this.props.listYKien}
                    keyExtractor={(item) => item.id}
                    renderItem={this.renderItem}
                    extraData={this.props.listYKien}
               
                />      

        </View>) ;
    }
}