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

import { fetch } from 'fetch';

const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r1})

export default class whatsappCloneReact extends Component {
  constructor(props){
    super(props);
    this.state = {
      randomUsersDataSource : ds.cloneWithRows([]),
      loaded: false
    }
  }

componentDidMount() {
  fetch('https://gist.githubusercontent.com/nivedita2015/10e76ced192e4309aef7159d9e65d73c/raw/7a812e3176c19b0087e55d91f5717a200a69d1a8/randomUsers.json')
  .then(response => response.json())
  .then((data) => {
    this.setState({
      randomUsersDataSource: ds.cloneWithRows(data),
      loaded: true
    })
  });
}

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
      <ListView
        initialListSize={5}
        enableEmptySection={true}
        dataSource={this.state.randomUsersDataSource}
        renderRow={(person) => { return this.renderUserRow(person)}} />
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
  listItemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  iconContainer: {
    flex: 1,
    alignItems: "flex-start"
  },
  callerDetailsContainer: {
    flex: 4,
    justifyContent: "center",
    borderBottomColor: "rgba(92,94,94,0.5)",
    borderBottomWidth: 0.25
  },
  callerDetailsContainerWrap: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row"
  },
  nameContainer: {
    alignItems: "flex-start",
    flex: 1
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  callIconContainer: {
    flex: 1,
    alignItems: "flex-end"
  },
  initStyle: {
    borderRadius: 30,
    width: 60,
    height: 60
  }
});

AppRegistry.registerComponent('whatsappCloneReact', () => whatsappCloneReact);
