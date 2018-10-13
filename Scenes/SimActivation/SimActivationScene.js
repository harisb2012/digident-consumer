import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

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
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <Image
            source={require('../../assets/images/tmobile-logo.png')}
            style={styles.logo}
          />
        </View>
      </View>
    )
  }
}
