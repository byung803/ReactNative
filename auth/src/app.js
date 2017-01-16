import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBzlcbu-lN1a7a035kL5etI_wzR-bWm5m4',
      authDomain: 'auth-7321e.firebaseapp.com',
      databaseURL: 'https://auth-7321e.firebaseio.com',
      storageBucket: 'auth-7321e.appspot.com',
      messagingSenderId: '548889673574'
    });
  }

  render() {
      return (
        <View>
          <Header headerText="Authentication" />
          <LoginForm />
        </View>
      );
  }
}

export default App;
