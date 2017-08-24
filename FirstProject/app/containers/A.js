import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Text, View, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';

// actions
import * as counterActions from '../actions/counterActions';

// images
import Images from '../assets/Images';

class A extends Component {
  static navigationOptions = {
    title: 'A',
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { state, actions, dispatch } = this.props;
    return (
      <View style={{flex:1}}>
        <Image source={Images.background} style={{flex:1, width:null, height:null}}>
          <Text>count:{state.count}</Text>
          <Button
            onPress={()=>dispatch(NavigationActions.navigate({routeName:'B'}))}
            title="move" />
        </Image>
      </View>
    );
  }
}

// connect to store
// stores, dispatch actions that are connected here can be accessed via this.props
export default connect(
  state => ({
    state: state.counter
  }),
  dispatch => ({
    actions: bindActionCreators(counterActions, dispatch),
    dispatch: dispatch
  })
)(A);
