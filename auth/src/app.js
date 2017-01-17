import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import { Header, Button, Spinner, CardSection } from './components/common';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBzlcbu-lN1a7a035kL5etI_wzR-bWm5m4',
      authDomain: 'auth-7321e.firebaseapp.com',
      databaseURL: 'https://auth-7321e.firebaseio.com',
      storageBucket: 'auth-7321e.appspot.com',
      messagingSenderId: '548889673574'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
          return (
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          );
      case false:
          return <LoginForm />;
      default:
          return <Spinner size="large" />;
    }
  }

  render() {
      return (
        <View style={{ flex: 1 }}>
          <Header headerText="Authentication" />
          {this.renderContent()}
        </View>
      );
  }
}

export default App;
