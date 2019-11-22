import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Content, Form, Item, Input, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import AppConstants from '../app/app.constants';

import { eventsDB } from '../firebase';

import { connect } from 'react-redux';
import * as GeneralActions from '../redux/actions/general-actions';

class CreateEventPage extends Component {

  state = {
    title:'',
    content:'',
    place: '',
  }

  handleInputChange = (field,value) => {
    this.setState({
      [field]: value,
    });
  }

  submitForm = async () => {
    const { title, content, place } = this.state;
    try{

      eventsDB.createEvent(this.props.uid,{
        title,content,place
      });

      Actions[AppConstants.ROUTES.list_event]();

    }
    catch(e){
      console.log('Error register',e);
    }
  }

  render(){
    const { title, content, place } = this.state;
    return (
      <View style={styles.container}>
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Titre"
                value={title}
                onChangeText={text => this.handleInputChange('title',text)}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Contenu"
                value={content}
                onChangeText={text => this.handleInputChange('content',text)}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Lieu"
                value={place}
                onChangeText={text => this.handleInputChange('place',text)}
              />
            </Item>

            <TouchableOpacity style={styles.ctaBlack} onPress={this.submitForm} activeOpacity={1}>
              <Text style={styles.ctaBlackTxt}>{"CRÉER UN EVENT"}</Text>
            </TouchableOpacity>

          </Form>

        </Content>
      </View>
    );
  }

}

const mapStateToProps = state => ({
  uid: state.generalReducer.uid,
});

export default connect(mapStateToProps,{...GeneralActions})(
  CreateEventPage
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
