import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const data = Array.from({ length: 20 }, (_, i) => ({ key: `Item ${i + 1}` }));

const FlatListScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default FlatListScreen;
