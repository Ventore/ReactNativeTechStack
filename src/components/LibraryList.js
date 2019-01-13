import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';

import LibraryItem from './LibraryItem';

class LibraryList extends Component {
  keyExtractor = item => item.id.toString();
  renderItem = ({ item }) => {
    return <LibraryItem library={item} />;
  };
  render() {
    console.log(this.props);
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

const mapStateToProps = ({ libraries }) => {
  return { libraries };
};

export default connect(mapStateToProps)(LibraryList);
