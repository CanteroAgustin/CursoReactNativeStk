import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const VALUE = 1;
const reducer = (state, action) => {

    switch (action.type) {
        case 'increase':
            console.log(action.payload);
            return { ...state, count: state.count + action.payload }
        case 'decrease':
            return { ...state, count: state.count + action.payload * -1 }
        default:
            return state;
    }
}; 8

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <View>
            <Button title="Increase"
                onPress={() => {
                    dispatch({ type: 'increase', payload: VALUE });
                    console.log(state.count);
                }}
            />
            <Button title="Decrease"
                onPress={() => {
                    dispatch({ type: 'decrease', payload: VALUE })
                }}
            />
            <Text style={{ fontSize: 30, textAlign: "center" }}>Current Counter: </Text>
            <Text style={{ fontSize: 30, textAlign: "center" }}>{state.count} </Text>

        </View>
    )
};

const styles = StyleSheet.create({});

export default CounterScreen;