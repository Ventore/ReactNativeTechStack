import React, { PureComponent } from 'react';
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from '../components/common';
import { selectLibrary } from '../actions';

const styles = StyleSheet.create({
  titleStyles: {
    fontSize: 26,
    textAlign: 'center',
  },
  descriptionStyles: {
    fontSize: 18,
  },
});

class LibraryItem extends PureComponent {
  componentWillUpdate() {
    LayoutAnimation.linear();
  }
  renderDescription() {
    const { isExpanded, library } = this.props;
    const { descriptionStyles } = styles;
    if (isExpanded) {
      return (
        <CardSection>
          <Text style={descriptionStyles}>{library.description}</Text>
        </CardSection>
      );
    }
    return null;
  }
  render() {
    const { titleStyles } = styles;
    const { title, id } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.selectLibrary(id);
        }}
      >
        <View>
          <CardSection>
            <Text style={titleStyles}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default connect(
  (state, props) => ({
    isExpanded: state.selectedLibraryId === props.library.id ? true : false,
  }),
  { selectLibrary }
)(LibraryItem);
