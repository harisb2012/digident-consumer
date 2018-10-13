import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { NativeBridge } from '../../native/NativeBridge';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export class VerifyIdentityScene extends React.Component {
  constructor(props) {
    super(props);

    this.handleDigi = this.handleDigi.bind(this);
  }

  handleDigi() {
    NativeBridge.getNativeBridge().initSDK();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text> Verify manually </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.handleDigi}>
          <Text> Use digi.me </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
