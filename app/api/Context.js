import { StyleSheet, Text, ToastAndroid, View } from 'react-native';
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { getNewsAPI, getSourceAPI } from './api';

export const NewsContext = createContext();

const Context = ({children}) => {
    const [news, setnews] = useState([]);
    const [categories, setcategories] = useState("general");
    const [index, setindex] = useState(1);
    const [sources, setsources] = useState();
    
    const fetchNews = async (reset = categories) => {
        const {data} = await axios.get(getNewsAPI(reset));
        setnews(data)
        setindex(1)
    }

    const fetchFromSources = async () => {
      try {
        const {data} = await axios.get(getSourceAPI(sources));
        setnews(data)
        setindex(1)        
      } catch (error) {
          ToastAndroid.show(error.message, ToastAndroid.SHORT);
      }
    }

    useEffect(() => {
      fetchNews()
  }, [categories])
  
  useEffect(() => {
    fetchFromSources()
  }, [sources])


  return (
    <NewsContext.Provider value={{news , index , setindex , fetchNews,setcategories,fetchFromSources , setsources}}>
        {children}
    </NewsContext.Provider>
  );
};

export default Context;

const styles = StyleSheet.create({});
