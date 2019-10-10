import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text} from 'react-native-ui-kitten';

const HomeScreen = () => (
  <Layout style={styles.container}>
    <Text style={styles.text} category="h1">
      Home
    </Text>
  </Layout>
);
const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  text: {marginVertical: 16, color: '#f26522'},
});

export default HomeScreen;
