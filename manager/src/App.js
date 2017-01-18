import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
   apiKey: 'AIzaSyA_BURK7jDUSllPOxPGLvXsPSa_yk3ixCw',
   authDomain: 'manager-6fe0f.firebaseapp.com',
   databaseURL: 'https://manager-6fe0f.firebaseio.com',
   storageBucket: 'manager-6fe0f.appspot.com',
   messagingSenderId: '177089864711'
 };
 firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
