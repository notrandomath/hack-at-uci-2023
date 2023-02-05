import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackActions } from '@react-navigation/native';
import React from "react";
import { ListItem, Avatar } from "@react-native-material/core";
// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Dimensions } from "react-native";
import { HStack } from "@react-native-material/core";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function SecondScreen({ navigation}) {
  // let language = route.params.language;
  // let greeting = language === "french" ? "Bonjour" : "Hello";
  
  return (
  
    <View style={styles.container}>
       <IconComponentProvider IconComponent={MaterialCommunityIcons}>
      <HStack m={3} spacing={10} >
      <Avatar icon={props => <Icon name="account" {...props} color="#FFFFFF"/>} />
      <Text style={styles.titleText}>Messages</Text>
      </HStack>
      <HStack m={4} spacing={30} style={styles.topbar}>
      {/* <View style={styles.iconBar}> */}
      <Avatar icon={props => <Icon name="account" {...props} color="#B7A1A1"/>} />
      <Avatar icon={props => <Icon name="account" {...props} color="#FFC0C0"/>} />
      <Avatar icon={props => <Icon name="account" {...props} color="#1E1E1E"/>} />
      <Avatar icon={props => <Icon name="account" {...props} color="#AF9898"/>} />
      <Avatar icon={props => <Icon name="account" {...props} color="#E7E7E7"/>} />
      {/* </View> */}
  </HStack>
      <>
        <ListItem style ={styles.lines}       
          leadingMode="avatar"
          leading={
            <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
          }
          title="Cooking Cat"
          secondaryText="I'll be in your neighborhood doing errands this…" 
        />
        <ListItem
        leadingMode="avatar"
        leading={
          <Avatar image={{ uri: "https://mui.com/static/images/avatar/2.jpg" }} />
        }
        title="Sleeping Monkey"
        secondaryText="Wish I could come, but I'm out of town this…"
      />
      <ListItem
        leadingMode="avatar"
        leading={
          <Avatar image={{ uri: "https://mui.com/static/images/avatar/3.jpg" }} />
        }
        title="Animating Anteater"
        secondaryText="Do you have Paris recommendations? Have you ever…"
      />
      <ListItem style ={styles.lines}       
          leadingMode="avatar"
          leading={
            <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
          }
          title="Bedridden Bear"
          secondaryText="DIVIDE AND CONQUER" 
        />
        <ListItem
        leadingMode="avatar"
        leading={
          <Avatar image={{ uri: "https://mui.com/static/images/avatar/2.jpg" }} />
        }
        title="Tired Turkey"
        secondaryText="binary search for my mental health"
      />
      <ListItem
        leadingMode="avatar"
        leading={
          <Avatar image={{ uri: "https://mui.com/static/images/avatar/3.jpg" }} />
        }
        title="Therapeutic Turtle"
        secondaryText="hi i failed my shindler compsci 161 exam"
      />
      <ListItem style ={styles.lines}       
          leadingMode="avatar"
          leading={
            <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
          }
          title="Excited Elephant"
          secondaryText="it was quick select all along..." 
        />
    </>
  
      {/* <Button 
        title='Go to Third Screen'
        onPress={() => navigation.push("Third")}
      />
      <Button 
        title='Go to Third Screen with Replace'
        onPress={() => {
          navigation.dispatch(
            StackActions.replace("Third")
          );
        }}
      /> */}
      <HStack spacing={120} m={4} style = {styles.botBar}>
      {/* <View style={styles.iconBar}> */}
        <Icon name="home" size={50} color="#FFFFFF"/>
        <Icon name="magnify" size={50} color="#FFFFFF"/>
        <Icon name="account-outline" size={50} color="#FFFFFF"/>
  </HStack>
      <StatusBar style="auto" />
    </IconComponentProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#1E1E1E',
    fontSize: 35,
    lineHeight: 47,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // topbar: {
  //   backgroundColor: "#FFC0C0",

    
  // },
  titleText: {
    color: '#FFFFFF',
    fontSize: 35,
    lineHeight: 47,
  },
  lines: {
    width: width,
    height: height,
  },
  botBar: {
    backgroundColor: "#1E1E1E",
    height: 100,
  }
});