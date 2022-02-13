import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RootPage from './app/root/RootPage';
import Context from "./app/api/Context";
const App = () => {
  return (
    <Context>
      <View style={{...styles.container , backgroundColor:"#282C35"}}>
        <RootPage/>
      </View>
    </Context>
  );
};



export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});
