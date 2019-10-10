import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text} from 'react-native-ui-kitten';

class MenuScreen2 extends Component {
  state = {};
  render() {
    const {navigation} = this.props;
    return (
      <Layout style={styles.container}>
        <Text
          style={styles.text}
          category="h1"
          onPress={() => navigation.navigate({routeName: 'Menu'})}>
          Menu 2
        </Text>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  text: {marginVertical: 16, color: '#f26522'},
});

export default MenuScreen2;
