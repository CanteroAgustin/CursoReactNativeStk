import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {

    return (
        <View style={styles.viewStyle}>
            <View style={styles.viewOneStyle}></View>
            <View style={styles.viewTwoStyle}></View>
            <View style={styles.viewThreeStyle}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        opacity: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 200
    },
    viewOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        backgroundColor: 'red',
        width: 100,
        height: 100
    },
    viewTwoStyle: {
        borderWidth: 3,
        borderColor: 'blue',
        backgroundColor: 'blue',
        width: 100,
        height: 100,
        alignSelf: 'flex-end'
    },
    viewThreeStyle: {
        borderWidth: 3,
        borderColor: 'green',
        backgroundColor: 'green',
        width: 100,
        height: 100,
    }
});

export default BoxScreen;