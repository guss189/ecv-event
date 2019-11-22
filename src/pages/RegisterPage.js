import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import AppConstants from '../app/app.constants';
import { Content, Form, Item, Input, Button } from 'native-base';
import { AuthService, usersDB } from '../firebase';
import { Actions } from 'react-native-router-flux';

class RegisterPage extends Component {

  state = {
    email:'',
    password:'',
    firstName: '',
    lastName: '',
  }

  handleInputChange = (field,value) => {
    this.setState({
      [field]: value,
    });
  }

  submitForm = async () => {
    const { email, password, firstName, lastName } = this.state;
    try{
      var response = await AuthService.createUser(email,password);

      usersDB.addUserInfo(response.user.uid,{
        firstName,lastName
      });

      Actions.pop();
    }
    catch(e){
      console.log('Error register',e);
    }
  }

  render(){
    const { email, password, firstName, lastName } = this.state;
    return (
      <View style={styles.container}>
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Email"
                value={email}
                onChangeText={text => this.handleInputChange('email',text)}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Mot de passe"
                value={password}
                onChangeText={text => this.handleInputChange('password',text)}
              />
            </Item>
            <Item last>
              <Input
                placeholder="firstName"
                value={firstName}
                onChangeText={text => this.handleInputChange('firstName',text)}
              />
            </Item>
            <Item last>
              <Input
                placeholder="lastName"
                value={lastName}
                onChangeText={text => this.handleInputChange('lastName',text)}
              />
            </Item>

            <TouchableOpacity style={styles.ctaBlack} onPress={this.submitForm} activeOpacity={1}>
              <Text style={styles.ctaBlackTxt}>{"CRÉER UN COMPTE"}</Text>
            </TouchableOpacity>

          </Form>

        </Content>
      </View>
    );
  }

}

export default RegisterPage;

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
