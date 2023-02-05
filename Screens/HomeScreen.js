import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        {/* <Text style={styles.titleText}>Fren Finder</Text> */}
      <Button 
        title="Navigate to second screen with french"
        onPress={() => navigation.navigate("Second", { language: "french" })}
      />
      <Button 
        title="Navigate to second screen with english"
        onPress={() => navigation.navigate("Second", { language: "english" })}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
//   titleText: {
//     width: 190,
//     height: 53,
//     left: 104,
//     top: 218,

//     fontFamily: 'Handlee',
//     fontStyle: normal,
//     fontWeight: 400,
//     fontSize: 40,
//     lineHeight: 53,
//     color: '#FFFFFF',
//     },
});