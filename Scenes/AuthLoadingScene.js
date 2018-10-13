import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as routes from '../navigation/routes'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export class AuthLoadingScene extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate(routes.SIM_ACTIVATION)
    }, 1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }
}
