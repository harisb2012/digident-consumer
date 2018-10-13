import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { get, map } from 'lodash'
import { camelToTitle } from '../../helpers/camelCaseToTitle'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontWeight: 'bold'
  }
})

const fieldsToDisplay = [
  'firstName',
  'lastName',
  'address',
  'zipCode',
  'city',
  'country'
]

export class IdentityVerifiedScene extends React.Component {
  render() {
    const { params } = this.props.navigation.state
    const verificationData = get(params, 'verificationData')

    return (
      <View style={styles.container}>
        {map(fieldsToDisplay, currentField => (
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
              flexDirection: 'column'
            }}
          >
            <Text style={styles.title}> {camelToTitle(currentField)}: </Text>
            <Text> {get(verificationData, currentField)} </Text>
          </View>
        ))}
        <Text style={styles.itemTitle} />
      </View>
    )
  }
}
