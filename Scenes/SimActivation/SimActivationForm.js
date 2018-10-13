import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity
} from 'react-native'
import PhoneInput from 'react-native-phone-input'
import CountryPicker from 'react-native-country-picker-modal'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60
  },
  textInput: {
    padding: 0,
    marginLeft: 0,
    textAlign: 'left',
    fontSize: 20
  },
  countryPickerWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  button: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#EA1C8B',
    backgroundColor: '#EA1C8B',
    paddingVertical: 10,
    paddingHorizontal: 45
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  buttonWrapper: { 
    flex: 1, 
    alignItems: 'center', 
    marginTop: 250 
  }
})

export class SimActivationForm extends React.Component {
  constructor() {
    super()

    this.onPressFlag = this.onPressFlag.bind(this)
    this.selectCountry = this.selectCountry.bind(this)
    this.state = {
      cca2: 'US',
      phoneNumber: ''
    }
  }

  componentDidMount() {
    this.setState({
      pickerData: this.phone.getPickerData()
    })
  }

  onChangeText = phoneNumber => {
    this.setState({ phoneNumber })
  }

  onPressFlag() {
    this.countryPicker.openModal()
  }

  selectCountry(country) {
    this.phone.selectCountry(country.cca2.toLowerCase())
    this.setState({ cca2: country.cca2 })
  }

  render() {
    const { onProceedClicked } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.countryPickerWrapper}>
          <View style={{ flex: 1.5 }}>
            <PhoneInput
              textProps={{fontSize: 20}}
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

          <View style={{ flex: 3.5, marginTop: -2 }}>
            <TextInput
              ref="textInput"
              name="phoneNumber"
              type="TextInput"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={this.onChangeText}
              placeholder="Enter Phone Number"
              keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
              maxLength={20}
              style={styles.textInput}
            />
          </View>
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={onProceedClicked} style={styles.button}>
            <Text style={styles.buttonText}> Next </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
