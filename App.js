/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Button, ScrollView, StyleSheet, View, FlatList } from 'react-native';

import AddContactForm from './AddContactForm'
import ContactList from './ContactList'
import contacts, { compareNames } from './contacts';

export default class App extends Component {
  state = {
    showContacts: false,
    showForm: false,
    contacts: contacts
  }

  toggleContacts = () => {
    this.setState(prevState => ({
      showContacts: !prevState.showContacts
    }))
  }

  toggleForm = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm
    }))
  }

  addContact = contact => {
    this.setState(prevState => ({
      showForm: false,
      contacts: [ ...prevState.contacts, contact ]
    }))
  }

   _keyExtractor = (_, index) => index.toString();


  render() {
    const { contacts, showForm, showContacts } = this.state

    if (showForm) return <AddContactForm addContact={this.addContact} />
    return (
      <View style={styles.app}>
        <Button title="Toggle Contacts" onPress={this.toggleContacts} />
        <Button title="Add Contacts" onPress={this.toggleForm} />
        {showContacts && (
          <ContactList
            contacts={contacts}
            keyExtractor={this._keyExtractor}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    display: 'flex',
    paddingTop: 50
  }
})
