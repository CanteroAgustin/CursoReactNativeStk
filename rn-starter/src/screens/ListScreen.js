import React from 'react';
import { FlatList } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: "Friend #1", age: 20 },
        { name: "Friend #2", age: 45 },
        { name: "Friend #3", age: 32 },
        { name: "Friend #4", age: 27 },
        { name: "Friend #5", age: 53 },
        { name: "Friend #6", age: 18 },
        { name: "Friend #7", age: 30 }
    ];

    return (
        <FlatList
            style={styles.flatListStyle}
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        borderWidth: 1,
        width: 150,
        height: 30,
        padding: 5
    },
    flatListStyle: {
        marginTop: 10,
        marginLeft: 10
    }
});


export default ListScreen;