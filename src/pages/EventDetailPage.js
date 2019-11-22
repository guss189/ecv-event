import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { Card, CardItem, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import AppConstants from '../app/app.constants';

import { eventsDB } from '../firebase';

import Event from '../components/Event';

class EventDetailPage extends Component {

  inscription = () => {
    alert("INSCRIPTION A L'EVENT");
  }

  render(){
    return (
      <View>
        <Card>
          <CardItem header>
            <Text>{this.props.event.title}</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{this.props.event.content}</Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text>{this.props.event.place}</Text>
          </CardItem>
        </Card>

        <View style={styles.container}>
          <TouchableOpacity style={styles.ctaBlack} onPress={this.inscription} activeOpacity={1}>
            <Text style={styles.ctaBlackTxt}>{"S'INSCRIRE"}</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

}

export default EventDetailPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 5,
    alignItems:'center',
  },
  ctaBlack:{
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width - 80 - 2,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: '#000',
    marginTop: 20,
  },
  ctaBlackTxt: {
    color:'#FFF',
    fontSize:14,
    fontFamily: 'Roboto_medium'
  },
});
