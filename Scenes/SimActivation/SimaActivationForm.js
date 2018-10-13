import React from 'react'
import { View, StyleSheet } from 'react-native'
import PhoneInput from 'react-native-phone-input'
import CountryPicker from 'react-native-country-picker-modal'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    paddingTop: 60
  }
})

export class SimActivationForm extends React.Component {
  constructor() {
    super()

    this.onPressFlag = this.onPressFlag.bind(this)
    this.selectCountry = this.selectCountry.bind(this)
    this.state = {
      cca2: 'US'
    }
  }

  componentDidMount() {
    this.setState({
      pickerData: this.phone.getPickerData()
    })
  }

  onPressFlag() {
    this.countryPicker.openModal()
  }

  selectCountry(country) {
    this.phone.selectCountry(country.cca2.toLowerCase())
    this.setState({ cca2: country.cca2 })
  }

  render() {
    return (
      <View style={styles.container}>
        <PhoneInput
          ref={ref => {
            this.phone = ref
          }}
          onPressFlag={this.onPressFlag}
        />

        <CountryPicker
          filterable={true}
          ref={ref => {
            this.countryPicker = ref
          }}
          onChange={value => this.selectCountry(value)}
          translation="eng"
          cca2={this.state.cca2}
        >
          <View />
        </CountryPicker>
      </View>
    )
  }
}
