/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Button, ScrollView, StyleSheet, View } from 'react-native';

import Row from './Row'
import contacts, { compareNames } from './contacts';

export default class App extends Component {
  state = {
    showContacts: false
  }

  toggleContacts = () => {
    this.setState(prevState => ({
      showContacts: !prevState.showContacts
    }))
  }

  render() {
    return (
      <View style={styles.app}>
        <Button title="Toggle Contacts" onPress={this.toggleContacts} />
        <ScrollView>
          {this.state.showContacts && contacts.map(contact => (
            <Row key={contact.key} {...contact} />
          ))}
        </ScrollView>
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
