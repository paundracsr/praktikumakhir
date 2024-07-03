import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const ScrollViewScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {[...Array(20).keys()].map((_, i) => (
        <Text style={styles.text} key={i}>Item {i + 1}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default ScrollViewScreen;
