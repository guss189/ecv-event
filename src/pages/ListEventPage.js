import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AppConstants from '../app/app.constants';

import { eventsDB } from '../firebase';

import Event from '../components/Event';

class ListEventPage extends Component {

  state = {
    events: [],
  }

  getData = async() => {
    const events = await eventsDB.getEvents();
    this.setState({events: events});
  }

  componentDidMount(){
    this.getData();
  }

  render(){
    return (
      <ScrollView>
        {this.state.events && (this.state.events.map((event,index) => (
          <Event key={index}
                 theEvent={event}
          />
        )))}
      </ScrollView>
    );
  }

}

export default ListEventPage;
