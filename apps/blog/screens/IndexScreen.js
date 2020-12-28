import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {

    const blogPosts = useContext(BlogContext);

    return (
        <View>
            <Text>Index Screen</Text>
            <FlatList
                data={blogPosts}
                keyExtractor={(blogPosts) => blogPosts.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>;
                }} />
        </View>
    );
}

const styles = StyleSheet.create({

});
export default IndexScreen;