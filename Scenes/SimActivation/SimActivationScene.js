import React from 'react'

import { View, StyleSheet, Image } from 'react-native'
import { SimActivationForm } from './SimActivationForm'
import * as routes from '../../navigation/routes'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  logoWrapper: {
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 70,
    marginHorizontal: 50
  }
})

export class SimActivationScene extends React.Component {
  proceed() {
    this.props.navigation.navigate(routes.VERIFY_IDENTITY)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <Image
            source={require('../../assets/images/tmobile-logo.png')}
            style={styles.logo}
          />
        </View>

        <SimActivationForm onProceedClicked={this.proceed.bind(this)} />
      </View>
    )
  }
}
