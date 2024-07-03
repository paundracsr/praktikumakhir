import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

const ButtonScreen = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Press Me"
        color="blue" // Menambahkan variasi dengan warna button
        onPress={() => Alert.alert('Button Pressed!')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ButtonScreen;
