import { Dimensions, Image, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
import { NewsContext } from '../api/Context';
import Carousel from 'react-native-snap-carousel';
import { categories,sources } from "../api/api";
import { SearchBar } from '../components';

const winWidth = Dimensions.get('window').width;
const SLIDER_WIDTH = Math.round(winWidth / 3.5);

const Discover = () => {

  const { setcategories , setsources } = useContext(NewsContext);

  return (
    <View style={styles.container}>
        {/* search */}

        <SearchBar/>

        {/* categories */}
          <Text style={{...styles.subtitle , color:'#000'}}>Categories</Text>
          <Carousel
            layout={'default'}
            data={categories}
            renderItem={({ item, index }) => (
              <TouchableOpacity style={styles.category} 
              onPress={()=>{
                setcategories(item.name)
                ToastAndroid.show(`${item.name}`, ToastAndroid.SHORT);
              }}>
                <Image source={{uri:item.pic}} style={styles.categoryImage}/>
                <Text style={{...styles.name , color:'#000'}}>{item.name}</Text>
              </TouchableOpacity>
            )}
            sliderWidth={winWidth}
            itemWidth={SLIDER_WIDTH} 
            activeSlideAlignment={"start"}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
          />
        {/* sources */}
        <Text style={{...styles.subtitle , color:'#000'}}>Sources</Text>
        <View style={styles.source}>
              {
                sources.map((item,index)=>(
                  <TouchableOpacity
                    onPress={()=>{
                      setsources(item.id)
                    }}
                    key={item.id}
                    style={styles.sourceContainer}
                  >
                    <Image source={{uri:item.pic}} style={styles.sourceImage}/>
                  </TouchableOpacity>
                ))
              }
        </View>
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container:{
      padding:10,
      alignItems:'center'
  },
  subtitle:{
    fontSize:20,
    fontWeight:'bold',
    paddingBottom:10,
    marginHorizontal:5,
    borderBottomColor:'#007FFF',
    borderBottomWidth:5,
    alignSelf:'flex-start',
    borderRadius:10
  },
  categoryImage:{
    height:"60%",
    width:"100%",
    resizeMode:'contain',
  },
  name:{
    fontSize:14,
    textTransform:'capitalize'
  },
  category:{
    height:130,
    margin:10,
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  sourceImage:{
    height:"100%",
    borderRadius:10,
    resizeMode:'cover'
  },
  source:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    paddingVertical:15,
  },
  sourceContainer:{
    height:150,
    width:'40%',
    borderRadius:10,
    margin:15,
    backgroundColor:'#cc313d',
  }
});
