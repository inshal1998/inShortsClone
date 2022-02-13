import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { News , Discover } from "../screens";
import { MycustomTabBar } from "../components";
import { SceneMap, TabView } from 'react-native-tab-view';
import { NewsContext } from '../api/Context';
const RootPage = () => {
    const layout = useWindowDimensions()
    const {index , setindex} = useContext(NewsContext);
    const [routes, setroutes] = useState([
        {
            key:'first',
            title:'Discover',

        },
        {
            key:'second',
            title:'News',

        },
    ]);

    const renderScene = SceneMap({
        first: Discover,
        second: News,
      });

  return (
    <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setindex}
        initialLayout={{ width: layout.width }}
        renderTabBar={props => <MycustomTabBar index={index} setindex={setindex} />}
    />
  );
};

export default RootPage;

const styles = StyleSheet.create({});
