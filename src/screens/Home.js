import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => (
  <View style={styles.container}>
    <Text>Welcome to Expo JX Template!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
