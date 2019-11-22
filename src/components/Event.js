import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Card, CardItem, Text, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import AppConstants from '../app/app.constants';

const Event = ({theEvent}) => {

  const goToEventDetails = (event) => {
    Actions[AppConstants.ROUTES.event_detail]({
      event: theEvent,
      title: theEvent.title,
    });
  }

  return(
    <View>
      <TouchableOpacity onPress={(event) => goToEventDetails(event)}>
        <Card>
          <CardItem header>
            <Text>{theEvent.title}</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{theEvent.content}</Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text>{theEvent.place}</Text>
          </CardItem>
        </Card>
      </TouchableOpacity>
    </View>
  );

}

export default Event;
