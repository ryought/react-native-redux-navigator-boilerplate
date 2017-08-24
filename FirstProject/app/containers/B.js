import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

import Counter from '../components/Counter';
import * as counterActions from '../actions/counterActions';

class B extends Component {
  static navigationOptions = {
    title: 'B',
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { countstate, actions, dispatch } = this.props;
    return (
      <View>
        <Counter text={'hoge'}/>
        <Text>{countstate.count}</Text>
        <Button
          onPress={actions.increment}
          title="up" />
        <Button
          onPress={()=>dispatch(NavigationActions.navigate({routeName:'A'}))}
          title="back" />
      </View>
    );
  }
}

export default connect(
  state => ({
    countstate: state.counter,
  }),
  dispatch => ({
    actions: bindActionCreators(counterActions, dispatch),
    dispatch: dispatch
  })
)(B);
