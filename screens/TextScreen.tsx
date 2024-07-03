import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a Text Component</Text>
      <Text style={[styles.text, styles.highlight]}>Highlighted Text</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
  highlight: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default TextScreen;
