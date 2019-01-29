import React from 'react'
import { TextInput, StyleSheet, View, Button } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  input: {
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    margin: 5,
  }
})

export default class AddContactForm extends React.Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
  }

  state = {
    name: '',
    phone: '',
  }

  createContactHandler = () => {
    this.props.addContact(this.state)
  }

  handleInputChange = (value, name) => {
    this.setState({
      [name]: value
    })
  }

  render() {
    const { name, phone } = this.state
    return (
      <View style={{ marginTop: 20 }}>
        <TextInput style={styles.input} value={name} onChangeText={value => this.handleInputChange(value, 'name')} />
        <TextInput keyboardType="numeric" style={styles.input} value={phone} onChangeText={value => this.handleInputChange(value, 'phone')} />
        <Button title="Add Contact" onPress={this.createContactHandler} />
      </View>
    )
  }
}
