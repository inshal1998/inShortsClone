import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { NewsContext } from '../api/Context';
import Carousel from 'react-native-snap-carousel';
import { SingleNew } from '../components';

const News = () => {
  const {news:{articles}} = useContext(NewsContext)
  const [activeIndex, setactiveIndex] = useState();
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={styles.container}>
    {
      articles && (
        <Carousel
          data={articles}
          renderItem={({item , index})=>(
            <SingleNew item={item} index={index} />
          )}
          layout={'stack'}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          onSnapToItem={(index) => {
            setactiveIndex(index)
          }}
        />
      )
    }
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#000'
  }
});
