import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export class IdentityVerifiedScene extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Identity verified...</Text>
      </View>
    )
  }
}
