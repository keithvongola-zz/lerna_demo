import React from 'react';
import {StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingBottom: 15,
  },
});

const Title = ({title}) => (
  <Text style={[styles.text]}>{title + "234"}</Text>
);

Title.defaultProps = {
  style: {},
};

Title.propTypes = {
  style: Text.propTypes.style,
};

export default Title;