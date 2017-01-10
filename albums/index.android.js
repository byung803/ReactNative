// Index.android.js - place code in here for An Android!

//1 Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//2 Create a component
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
  );

//3 Render it to the device
AppRegistry.registerComponent('albums', () => App);
