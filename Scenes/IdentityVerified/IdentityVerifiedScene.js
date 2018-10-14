import React from 'react'
import { View, ScrollView, Text, StyleSheet, SafeAreaView } from 'react-native'
import { get, map } from 'lodash'
import { camelToTitle } from '../../helpers/camelCaseToTitle'
import { human, iOSUIKit } from 'react-native-typography'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30
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
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={[iOSUIKit.largeTitleEmphasized, {marginVertical: 100}]}>Pre-verified Identity imported!</Text>
        {map(fieldsToDisplay, currentField => (
          <SafeAreaView
            key={currentField}
            style={{
              flex: 1
            }}
          >
            <Text style={human.subhead}> {camelToTitle(currentField)}: </Text>
            <Text style={human.headline}> {get(verificationData, currentField)} </Text>
          </SafeAreaView>
        ))}
      </ScrollView>
    )
  }
}
