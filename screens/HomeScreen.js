import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import { Stack, Button } from "@react-native-material/core";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.titleText}>Fren Finder</Text>
        <Button title="Login" color="#FFC0C0"
          onPress={() => navigation.navigate("Second")}
        />
        {/* <Text style={styles.titleText}>New User?</Text> */}
        <Button style={styles.signupText} variant="text" title="Sign Up" color= '#DFD0D0'
          onPress={() => navigation.navigate("Third")}
        />
      {/* <Button 
        title="Navigate to second screen with french"
        onPress={() => navigation.navigate("Second", { language: "french" })}
      />
      <Button 
        title="Navigate to second screen with english"
        onPress={() => navigation.navigate("Second", { language: "english" })}
      /> */}
      <StatusBar style="auto" />
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
  titleText: {
    // width: 190,
    // height: 53,
    // left: 104,
    // top: 218,

    // fontFamily: 'Handlee',
    // fontStyle: normal,
    // fontWeight: 400,
    fontSize: 40,
    lineHeight: 53,
    color: '#FFFFFF',
    },
    signupText: {
      fontSize: 20,
      lineHeight: 24,
      textDecorationLine: 'underline',
    }
});