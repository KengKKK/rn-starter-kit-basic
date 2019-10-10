import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text} from 'react-native-ui-kitten';

const MenuScreen = () => (
  <Layout style={styles.container}>
    <Text style={styles.text} category="h1">
      Menu
    </Text>
  </Layout>
);
const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  text: {marginVertical: 16, color: '#f26522'},
});

export default MenuScreen;
