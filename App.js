import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeModules
} from 'react-native';

export default class App extends Component<{}> {

  buttonOnPress = (icon) => {
    NativeModules.IconChanger.set(icon)
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.buttonOnPress('AppIconA')}>
          <Text>Icon A</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => this.buttonOnPress('AppIconB')}>
          <Text>Icon B</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => this.buttonOnPress('AppIconC')}>
          <Text>Icon C</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => this.buttonOnPress(null)}>
          <Text>Reset</Text>
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
