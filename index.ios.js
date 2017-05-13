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
  View,
  ListView,
  Image
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Calls from './app/components/Calls.js';
import Chats from './app/components/Chats.js';
import Contacts from './app/components/Contacts.js';


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
      <ScrollableTabView
      tabBarUnderLineColor = "#fff"
      tabBarUnderLineStyle = {{backgroundColor: "#fff"}}
      tabBarBackgroundColor = "#075e54"
      tabBarActiveTextColor = "#fff"
      tabBarInactiveTextColor = "#88b0ac"
      >
      <Calls tabLabel="Calls" {...this.props} />
      <Chats tabLabel="Chats" {...this.props} />
      <Contacts tabLabel="Contacts" {...this.props} />
      </ScrollableTabView>
      </View>
      </View>
    );
  }
renderUserRow(person){
    return (
      <View style = {styles.listItemContainer}>
    <View style= {styles.iconContainer}>
     <Image source={{uri:person.image}} style={styles.initStyle} resizeMode='contain' />
    </View>
    <View style = {styles.callerDetailsContainer}>
     <View style={styles.callerDetailsContainerWrap}>
      <View style={styles.nameContainer}>
        <Text>{person.first_name}</Text>
        <View style={styles.dateContainer}>
          <Icon name={person.missed ? "call-missed" : "call-received"} size={15} color={person.missed ? "#ed788b" : "#075e54"} />
          <Text style={{ fontWeight:'400', color:'#666', fontSize:12 }}>{person.date} {person.time}</Text>
        </View>
       </View>
     <View style={styles.callIconContainer}>
      <Icon name="phone" color='#075e54' size={23} style={{ padding:5 }} />
     </View>
    </View>
   </View>
  </View>
    )
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
  },
});

AppRegistry.registerComponent('whatsappCloneReact', () => whatsappCloneReact);
