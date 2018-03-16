import React, { Component } from "react";
import { connect } from "react-redux";
import { addNavigationHelpers } from "react-navigation";
import NavigationStack from "./navigationStack";
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
const addListener = createReduxBoundAddListener("root");
class AppNavigation extends Component {
  render() {
    const { navigationState, dispatch } = this.props;
    return (
      <NavigationStack
        navigation={addNavigationHelpers({ dispatch, state: navigationState, addListener })}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    navigationState: state.navigationReducers
  };
};

export default connect(mapStateToProps)(AppNavigation);