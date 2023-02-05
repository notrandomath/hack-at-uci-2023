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

export default function ThirdScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <Avatar icon={props => <Icon name="account" {...props} color="#FFFFFF"/>} />
        <Button style={styles.signupText} variant="text" title="Match Found!" color= '#FFFFFF'
            onPress={() => navigation.navigate("Second")}
        />
      
      {/* <Text>Third</Text> */}
      {/* <Button title="Pop to root" onPress={() => navigation.popToTop()} />
      <Button title="Pop" onPress={() => navigation.pop()} /> */}
      <StatusBar style="auto" />
      </IconComponentProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242A4D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});