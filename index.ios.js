/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class whatsappCloneReact extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
      <View style={styles.leftHeaderContainer}>
      <Text style={styles.logoText}>WhatsApp</Text>
      </View>
      <View style={styles.rightHeaderContainer}>
      <Icon name='search' style={styles.rightHeaderIcon} />
      <Icon name='call' style={styles.rightHeaderIcon} />
      <Icon name='more-vert' style={styles.rightHeaderIcon} />
      </View>
      </View>
      <View style={styles.contentContainer}>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: 24
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#075e54",
    alignItems: "center",
    paddingRight: 5
  },
  leftHeaderContainer: {
    alignItems: "flex-start",
    flexDirection: "row"
  },
  rightHeaderContainer: {
    alignItems: "flex-end",
    flexDirection: "row"
  },
  contentContainer: {
    flex: 6,
  },
  logoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    alignItems: "flex-start",
    marginLeft: 10
  },
  rightHeaderIcon: {
    color: '#fff',
    fontSize: 23,
    padding: 5
  }
});

AppRegistry.registerComponent('whatsappCloneReact', () => whatsappCloneReact);
