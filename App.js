import React, { Component } from 'react';
import { Container } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import { Provider } from 'react-redux';
import store from './src/redux/store';

import AppRoutes from './src/app/app.routes.js';

export default class App extends Component{

  state = {
    isReady:false,
  }

  async componentDidMount(){
    await Font.loadAsync({
      Roboto: require ('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({isReady:true});
  }

  render(){
    if(!this.state.isReady){
      return <AppLoading/>
    }
    else{
      return (
        <Provider store={store}>
          <Container>
            <AppRoutes/>
          </Container>
        </Provider>
      );
    }
  }

}
