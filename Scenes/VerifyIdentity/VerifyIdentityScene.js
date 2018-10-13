import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  NativeEventEmitter,
  NativeModules
} from 'react-native'
import { NativeBridge } from '../../native/NativeBridge'

import * as routes from '../../navigation/routes'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const digiMeEvents = {
  FILE_DATA: 'fileData'
}

export class VerifyIdentityScene extends React.Component {
  constructor(props) {
    super(props)

    this.handleDigi = this.handleDigi.bind(this)
    this.emitter = new NativeEventEmitter(NativeModules.NativeBridge)
    this.emitter.addListener(digiMeEvents.FILE_DATA, fileData => {
      // used for demo purposes
      const mockedData = {
        identificationId: '1234-5678',
        verified: true
      }

      if (mockedData.verified) {
        this.props.navigation.navigate(routes.IDENTITY_VERIFIED)
      }
    })
  }

  handleDigi() {
    NativeBridge.getNativeBridge().initSDK()
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
