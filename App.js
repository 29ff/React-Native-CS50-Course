/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Button, ScrollView, StyleSheet, View, FlatList } from 'react-native';

import Row from './Row'
import contacts, { compareNames } from './contacts';

export default class App extends Component {
  state = {
    showContacts: false,
    contacts: contacts
  }

  toggleContacts = () => {
    this.setState(prevState => ({
      showContacts: !prevState.showContacts
    }))
  }

  sortContacts = () => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames)
    }))
  }

   _keyExtractor = (_, index) => index.toString();

  renderItem = ({ item }) => (<Row {...item} />)

  render() {
    return (
      <View style={styles.app}>
        <Button title="Toggle Contacts" onPress={this.toggleContacts} />
        <Button title="Sort Contacts" onPress={this.sortContacts} />
        {this.state.showContacts && (
          <FlatList
            data={this.state.contacts}
            renderItem={this.renderItem}
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
