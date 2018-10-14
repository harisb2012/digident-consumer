import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  NativeEventEmitter,
  NativeModules,
  ActivityIndicator,
  Image
} from 'react-native'
import { NativeBridge } from '../../native/NativeBridge'

import * as routes from '../../navigation/routes'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  description: {
    marginTop: 100,
    textAlign: 'center',
    fontSize: 25
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  verifyManuallyButton: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#BEBEBE',
    paddingVertical: 20,
    flex: 1,
    backgroundColor: '#ECECEC'
  },
  digimeButton: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#EA1C8B',
    paddingVertical: 20,
    flex: 1
  },
  verifyButtonText: {
    color: '#464646',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18
  },
  digiLogo: {
    alignSelf: 'center',
    height: 70,
    marginBottom: 10
  }
})

const digiMeEvents = {
  FILE_DATA: 'fileData'
}

export class VerifyIdentityScene extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false
    }

    this.handleDigi = this.handleDigi.bind(this)
    this.emitter = new NativeEventEmitter(NativeModules.NativeBridge)
    this.emitter.addListener(digiMeEvents.FILE_DATA, fileData => {
      // used for demo purposes
      // after digi.me starts supporting postbox feature, fileData can be used
      const mockedData = {
        identificationId: '1234-5678',
        verified: true,
        firstName: 'Harun',
        lastName: 'Smrkovic',
        address: 'Grbavicka',
        zipCode: '71000',
        city: 'Sarajevo',
        country: 'BiH'
      }

      if (mockedData.verified) {
        this.props.navigation.navigate(routes.IDENTITY_VERIFIED, {
          verificationData: mockedData
        })
      }
    })
  }

  handleDigi() {
    this.setState({ loading: true })
    NativeBridge.getNativeBridge().initSDK()
  }

  render() {
    const { loading } = this.state

    if (loading) {
      return (
        <View
          style={[
            styles.container,
            { justifyContent: 'center', alignItems: 'center' }
          ]}
        >
          <ActivityIndicator size="large" />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text style={styles.description}> Verify your identity </Text>

        <View
          style={[
            styles.buttonWrapper,
            { alignItems: 'flex-end', marginBottom: 60 }
          ]}
        >
          <TouchableOpacity style={styles.verifyManuallyButton}>
            <Text style={styles.verifyButtonText}> Verify manually </Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.buttonWrapper,
            { alignItems: 'flex-start', marginTop: 20 }
          ]}
        >
          <TouchableOpacity
            onPress={this.handleDigi}
            style={styles.digimeButton}
          >
            <Image
              source={require('../../assets/images/digime.png')}
              style={styles.digiLogo}
              resizeMode="contain"
            />
            <Text style={styles.verifyButtonText}>
              Use digi.me for identity verification
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
