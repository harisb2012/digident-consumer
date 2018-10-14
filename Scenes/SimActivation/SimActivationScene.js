import React from 'react'

import { View, StyleSheet, Image, Text } from 'react-native'
import { SimActivationForm } from './SimActivationForm'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as routes from '../../navigation/routes'
import { iOSUIKit } from 'react-native-typography'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  logoWrapper: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 70,
    marginHorizontal: 50
  },
  contentWrapper: {
    paddingLeft: 20,
    marginBottom: 50
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
          <Text style={[iOSUIKit.largeTitleEmphasized, {marginTop: 15}]}>
            T-Mobile Activation
          </Text>

          <Text style={iOSUIKit.footnote}>
            Start verification process to activate your SIM card
          </Text>
        </View>

        <SimActivationForm onProceedClicked={this.proceed.bind(this)} />
      </KeyboardAwareScrollView>
    )
  }
}
