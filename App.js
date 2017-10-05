/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeModules
} from 'react-native';

export default class App extends Component<{}> {

  buttonOnPress = (idx) => {
    switch (idx) {
      case 1:
        break
      case 2:
        break
      case 3:
        break
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.buttonOnPress(1)}>
          <Text>IconA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => this.buttonOnPress(2)}>
          <Text>IconB</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => this.buttonOnPress(3)}>
          <Text>IconC</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: '#AA88BB',
    padding: 10,
    margin: 10
  },
});
