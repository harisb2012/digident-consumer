import React from 'react'

import { View, StyleSheet, Image, Text } from 'react-native'
import { SimActivationForm } from './SimActivationForm'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as routes from '../../navigation/routes'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  logoWrapper: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 80
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 70,
    marginHorizontal: 50
  },
  contentWrapper: {
    alignItems: 'center',
    marginBottom: 60
  },
  text: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 18
  }
})

export class SimActivationScene extends React.Component {
  proceed() {
    this.props.navigation.navigate(routes.VERIFY_IDENTITY)
  }

  render() {
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.logoWrapper}>
          <Image
            source={require('../../assets/images/tmobile-logo.png')}
            style={styles.logo}
          />
        </View>

        <View style={styles.contentWrapper}>
          <Text style={[styles.text, { marginBottom: 15 }]}>
            Welcome to T-Mobile
          </Text>

          <Text style={styles.text}>
            Start verification process to activate your SIM card
          </Text>
        </View>

        <SimActivationForm onProceedClicked={this.proceed.bind(this)} />
      </KeyboardAwareScrollView>
    )
  }
}
