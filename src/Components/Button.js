import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Layout, Text} from 'react-native-ui-kitten';

const ButtonComp = () => (
  <Layout style={styles.container}>
    <Text style={styles.text} category="h1">
      Welcome to UI Kitten
    </Text>
    <Button>BUTTON</Button>
  </Layout>
);
export default ButtonComp;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  text: {marginVertical: 16, color: '#f26522'},
});
