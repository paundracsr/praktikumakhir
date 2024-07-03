import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={[styles.image, styles.largeImage]} // Menambahkan variasi dengan ukuran gambar
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
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  largeImage: {
    width: 150,
    height: 150,
  },
});

export default ImageScreen;
