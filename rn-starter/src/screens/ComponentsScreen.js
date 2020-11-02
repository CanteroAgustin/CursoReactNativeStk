import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

    const name = "Agustín";

    return (
        <View>
            <Text style={styles.textStyle}>Gettin started with react native!</Text>
    <Text style={styles.subHeaderStyle}>My name is {name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20,
        color: "green"
    }
})

export default ComponentsScreen;