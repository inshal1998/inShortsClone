import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { NewsContext } from '../api/Context';
const MycustomTabBar = ({index , setindex}) => {

    const { fetchNews } = useContext(NewsContext);

  return (
    <View style={{...styles.container , backgroundColor:'#282c35'}}>
        {
            index === 0 ?
                <TouchableOpacity style={styles.left}>
                    <Text style={{...styles.text , color:'lightgrey' }}>
                        <MaterialCommunityIcons
                            name='theme-light-dark'
                            size={24}
                            color='#007FFF'
                        />
                    </Text>
                </TouchableOpacity> : 
                <TouchableOpacity style={styles.left} onPress={()=>{setindex(index === 0 ?1:0)}} >
                    <SimpleLineIcons
                        name='arrow-left'
                        size={15}
                        color='#007FFF'
                    />
                    <Text style={{...styles.text , color:'lightgrey'}}>Discover</Text>
                </TouchableOpacity>
        }
        <Text style={{...styles.center , color:'white'}}>
            {index === 0 ? 'Discover' : 'All News'}
        </Text>
        {
            index ? 
                <TouchableOpacity 
                    style={styles.right} 
                    onPress={()=>{
                        fetchNews('general')
                        ToastAndroid.show('Refreshing Please Wait', ToastAndroid.SHORT);
                }} >
                    <Text style={styles.text}>
                        <AntDesign
                            size={24}
                            color='#007FFF'
                            name='reload1'
                        />
                    </Text>
                </TouchableOpacity> :
                <TouchableOpacity style={{...styles.left}} onPress={()=>{setindex(index === 0 ? 1 :0)}} >
                    <Text style={{...styles.text , color:'white'}}>All News</Text>
                    <SimpleLineIcons
                        name='arrow-right'
                        size={15}
                        color='#007FFF'
                    />
                </TouchableOpacity>
        }
    </View>
  );
};

export default MycustomTabBar;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        alignItems:'center',
        borderBottomColor:"#000",
        borderBottomWidth:0.5,
    },
    left:{
        flexDirection:'row',
        alignItems:'center',
        width:80,
        justifyContent:'space-between'
    },
    text:{
        fontSize:16,
    },
    right:{
        width:80,
        alignItems:'flex-end'
    },
    center:{
        paddingBottom:6,
        borderBottomColor:'#0077FF',
        borderBottomWidth:5,
        fontSize:16,
        fontWeight:'700',
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
    }
});
