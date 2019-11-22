import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AppConstants from '../app/app.constants';

class Home extends Component {

  onPressConnexion = () => {
    Actions[AppConstants.ROUTES.login]();
  }

  onPressInscription = () => {
    Actions[AppConstants.ROUTES.signup]();
  }

  render(){
    return (
      <ImageBackground
        source={require('../images/home.jpg')}
        style={styles.imageContainer}
      >
        <View style={styles.ctaContainer}>
          <TouchableOpacity style={styles.ctaWhite} onPress={this.onPressConnexion} activeOpacity={1}>
            <Text style={styles.ctaWhiteTxt}>{"JE ME CONNECTE"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ctaBlack} onPress={this.onPressInscription} activeOpacity={1}>
            <Text style={styles.ctaBlackTxt}>{"JE CRÉE MON COMPTE"}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }

}

export default Home;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'stretch',
  },
  infoPlateforme: {
    position:'absolute',
    top:270,
    left:50,
    color:'white',
    fontSize:15,
    fontFamily: 'Roboto'
  },
  ctaContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'flex-end',
    paddingBottom: 50,
  },
  ctaWhite:{
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 80,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius:30,
    marginBottom:35,
  },
  ctaWhiteTxt: {
    color:'#000',
    fontSize:14,
    fontFamily: 'Roboto_medium'
  },
  ctaBlack:{
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width - 80 - 2,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: '#000',
  },
  ctaBlackTxt: {
    color:'#FFF',
    fontSize:14,
    fontFamily: 'Roboto_medium'
  },
})
