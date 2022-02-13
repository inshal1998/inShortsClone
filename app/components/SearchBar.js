import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useContext, useState } from 'react';
import Entypo from "react-native-vector-icons/Entypo";
import { NewsContext } from '../api/Context';
import { SingleNew } from '.';

const SearchBar = () => {
  const {news :{articles}} = useContext(NewsContext);
  const [searchResults, setsearchResults] = useState([]);
  const [modalVisible, setmodalVisible] = useState(false);
  const [currentNews, setcurrentNews] = useState();

  const handleSearchModal = (result)=>{
      setmodalVisible(true);
      setcurrentNews(result);
  }

  const handleSearch = (text) => {
      if(!text){
        setsearchResults([]);
    }
    setsearchResults(articles.filter((query)=>query.title.includes(text)));
  }

    return (
    <View style={{width:'100%' , position:'relative'}}>
        <TextInput
            style={{...styles.Search , backgroundColor:'#000' , color:'#fff'}}
            onChangeText={(text)=>{ handleSearch(text)}}
            placeholder="Search For News"
            placeholderTextColor={'#cccccc'}
        />
        <View style={styles.searchResults}>
            {
                searchResults.slice(0,10).map((result)=>(
                    <TouchableOpacity
                        key={result.title}
                        activeOpacity={0.8}
                        onPress={()=> handleSearchModal(result)}
                    >   
                        <Text style={{...styles.singleResult , backgroundColor:'#000'}}>{result.title}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
        <Modal 
            animationType='slide' 
            transparent={true} 
            visible={modalVisible} 
            onRequestClose={()=>{
                setmodalVisible(!modalVisible)
            }}
        >
            <TouchableOpacity
                onPress={()=>{
                    setmodalVisible(!modalVisible)
                }}
                style={{
                    position:'absolute',
                    zIndex:1,
                    right:0,
                    margin:20,
                    top:0,
                }}
            >
                <Entypo name='circle-with-cross' size={30} color='#fff' />
            </TouchableOpacity>
            <View style={{flex:1}}>
                <SingleNew item={currentNews} />
            </View>
        </Modal>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
    Search:{
        paddingVertical:10,
        paddingHorizontal:15,
        borderRadius:10,
        fontSize:15,
        marginBottom:15
    },
    searchResults:{
        position:'absolute',
        zIndex:1,
        top:50,
    },
    singleResult:{
        borderRadius:10,
        padding:10,
        margin:0.5,
        shadowColor: "#000",
        elevation:5,
    }
});
