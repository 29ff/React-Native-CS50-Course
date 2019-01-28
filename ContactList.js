import React, { Component } from 'react';
import { SectionList } from 'react-native';
import PropTypes from 'prop-types';

const ContactList = props => {
  return (
    <SectionList
      renderItem={props.renderItem}
      renderSectionHeader={props.renderSectionHeader}
      sections={[{
        title: 'A',
        data: props.contacts
      }]}
    />
  );
}

ContactList.propTypes = {
  renderItem: PropTypes.func.isRequired,
  renderSectionHeader: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired
};

export default ContactList;
