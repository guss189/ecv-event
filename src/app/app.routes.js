import React, { Component } from 'react';
import { Router, Stack, Scene, Actions, ActionConst, Tabs } from 'react-native-router-flux';
import AppConstants from './app.constants';

import HomePage from '../pages/HomePage.js';
import LoginPage from '../pages/LoginPage.js';
import RegisterPage from '../pages/RegisterPage.js';

import ListEventPage from '../pages/ListEventPage.js';
import CreateEventPage from '../pages/CreateEventPage.js';
import EventDetailPage from '../pages/EventDetailPage.js';

import { connect } from 'react-redux';
import * as GeneralActions from '../redux/actions/general-actions';

class AppRoutes extends Component {

  onPressDeco = () => {
    Actions[AppConstants.ROUTES.home]({
      type: ActionConst.RESET,
    });
  }

  render(){
    return(
      <Router>
        <Stack key="root">
          <Scene key={AppConstants.ROUTES.home} component={HomePage} title="Home" hideNavBar/>
          <Scene key={AppConstants.ROUTES.signup} component={RegisterPage} backTitle="Retour" title="Inscription"/>
          <Scene key={AppConstants.ROUTES.login} component={LoginPage} backTitle="Retour" title="Connection"/>

          <Tabs
            key="tabBar"
            hideNavBar
            initial
          >
            <Stack key="aaa" title="Liste des events">
              <Scene key={AppConstants.ROUTES.list_event}
                     component={ListEventPage}
                     headerMode="screen"
                     rightTitle="Déco"
                     title="Liste des events"
                     onRight={this.onPressDeco}
              />
              <Scene key={AppConstants.ROUTES.event_detail}
                     component={EventDetailPage}
                     headerMode="screen"
                     rightTitle="Déco"
                     onRight={this.onPressDeco}
                     backTitle="Retour"
                     title="Detail event"
              />
            </Stack>

            <Stack key="bbbb" title="Creer un event">
              <Scene key={AppConstants.ROUTES.create_event}
                     component={CreateEventPage}
                     headerMode="screen"
                     rightTitle="Déco"
                     title="Creer un event"
                     onRight={this.onPressDeco}
              />
            </Stack>

          </Tabs>

        </Stack>
      </Router>
    );
  }

};

const mapStateToProps = state => ({
  uid: state.generalReducer.uid,
});

export default connect(mapStateToProps,{...GeneralActions})(
  AppRoutes
);
