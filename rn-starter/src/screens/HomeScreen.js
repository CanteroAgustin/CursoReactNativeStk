import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";


const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        title="Go to the Components Demo"
        onPress={() => props.navigation.navigate("Components")}
      />
      <Button
        title="Go to the List Demo"
        onPress={() => props.navigation.navigate("List")}
      />
      <Button
        title="Go to the Image Demo"
        onPress={() => props.navigation.navigate("Image")}
      />
      <Button
        title="Go to the Counter Demo"
        onPress={() => props.navigation.navigate("Counter")}
      />
      <Button
        title="Go to the Color Demo"
        onPress={() => props.navigation.navigate("Color")}
      />
      <Button
        title="Go to the Square Demo"
        onPress={() => props.navigation.navigate("Square")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;