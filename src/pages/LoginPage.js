import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Content, Form, Item, Input, Button } from 'native-base';
import { AuthService } from '../firebase';
import { Actions, ActionConst } from 'react-native-router-flux';

import AppConstants from '../app/app.constants';

import { connect } from 'react-redux';
import * as GeneralActions from '../redux/actions/general-actions';

class LoginPage extends Component {

  state = {
    email:'',
    password:'',
  }

  handleInputChange = (field,value) => {
    this.setState({
      [field]: value,
    });
  }

  submitForm = async() => {
    const { email, password } = this.state;

    try{
      var response = await AuthService.login(email,password);

      this.props.setUserConnected(response.user.uid);

      Actions['tabBar']({
        type: ActionConst.RESET,
      });

    }
    catch(e){
      console.log('Error login',e);
    }
  }

  render(){
    const { email, password } = this.state;
    return (
      <View style={styles.container}>
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Email"
                value={email}
                onChangeText={(text) => this.handleInputChange('email',text)}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Mot de passe"
                value={password}
                onChangeText={(text) => this.handleInputChange('password',text)}
              />
            </Item>

            <TouchableOpacity style={styles.ctaBlack} onPress={this.submitForm} activeOpacity={1}>
              <Text style={styles.ctaBlackTxt}>{"SE CONNECTER"}</Text>
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
  LoginPage
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
