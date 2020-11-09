import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";


const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => props.navigation.navigate("Components")}
        title="Go to the Components Demo" />
      <Button
        onPress={() => props.navigation.navigate("List")}
        title="Go to the List Demo"/>
      <Button
        onPress={() => props.navigation.navigate("Image")}
        title="Go to the Image Demo" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;