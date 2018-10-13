import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export class VerifyIdentityScene extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text> Verify manually </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text> Use digi.me </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
