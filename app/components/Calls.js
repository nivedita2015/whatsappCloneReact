
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
import { WHATSAPP_CALLS_API } from '../data/data';

const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r1});

class Calls extends Component {
  constructor(props){
    super(props);
    this.state = {
      randomUsersDataSource : ds.cloneWithRows([]),
      loaded: false
    }
  }

componentDidMount() {
  fetch(WHATSAPP_CALLS_API)
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

      <ListView
        initialListSize={5}
        enableEmptySection={true}
        dataSource={this.state.randomUsersDataSource}
        renderRow={(person) => { return this.renderUserRow(person)}} />
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

module.exports = Calls;
