import { Dimensions, Image, ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const winHeight = Dimensions.get('window').height;
const winWidth = Dimensions.get('window').width;
const SingleNew = ({item , index}) => {
    return (
    <View style={{ height:winHeight , width:winWidth }}>
      <Image
        source={{uri:item.urlToImage}}
        style={{height:'45%' ,resizeMode:'cover', width:winWidth}}
      />
      <View style={{...styles.description,backgroundColor:"#282c35"}}>
        <Text style={{...styles.title , color:"#fff"}}>{item.title}</Text>
        <Text style={{...styles.content , color:'#fff'}}>{item.description}</Text>
        <Text style={{color:'white'}}> Shorts By : 
            <Text>{item.author ?? "Unknown"}</Text>
        </Text>
        <ImageBackground blurRadius={30} style={styles.footer} source={{uri:item.urlToImage}}>
            <TouchableOpacity onPress={()=>{Linking.openURL(item.url)}}>
                <Text style={{fontSize:15 , color:"white"}}>
                    {item?.content?.slice(0,45)}...
                </Text>
                <Text style={{fontSize:17 , fontWeight:'bold' ,color:'#fff'}}>Read More</Text>
            </TouchableOpacity>
        </ImageBackground>
        
      </View>
    </View>
  );
};

export default SingleNew;

const styles = StyleSheet.create({
    title:{
        fontSize:25,
        fontWeight:'bold',
        paddingBottom:10,
        color:'#000'
    },
    content:{
        fontSize:18,
        paddingBottom:10
    },
    footer:{
        height:80,
        width:winWidth,
        position:'absolute',
        bottom:50,
        backgroundColor:'#d7be69',
        justifyContent:'center',
        paddingHorizontal:20
    },
    description:{
        padding:15,
        flex:1,
    }
});
