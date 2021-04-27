import * as React from 'react';
import {useState} from "react";
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {StatusBar} from "expo-status-bar";

const HomeScreen = () => {
    const [users, setUsers] = useState([
        {
            imageURL: require("../assets/img/favicon.png"),
            username: "User1",
        },
        {
            imageURL: require("../assets/img/favicon.png"),
            username: "User2",
        },
        {
            imageURL: require("../assets/img/favicon.png"),
            username: "User3",
        },
        {
            imageURL: require("../assets/img/favicon.png"),
            username: "User3",
        },
        {
            imageURL: require("../assets/img/favicon.png"),
            username: "User3",
        },
        {
            imageURL: require("../assets/img/favicon.png"),
            username: "User3",
        },
        {
            imageURL: require("../assets/img/favicon.png"),
            username: "User3",
        },
        {
            imageURL: require("../assets/img/favicon.png"),
            username: "User3",
        },
        {
            imageURL: require("../assets/img/favicon.png"),
            username: "User3",
        },
        {
            imageURL: require("../assets/img/favicon.png"),
            username: "User3",
        },
        {
            imageURL: require("../assets/img/favicon.png"),
            username: "User3",
        },
        {
            imageURL: require("../assets/img/favicon.png"),
            username: "User3",
        },
        {
            imageURL: require("../assets/img/favicon.png"),
            username: "User3",
        },
        {
            imageURL: require("../assets/img/favicon.png"),
            username: "User3",
        },
        {
            imageURL: require("../assets/img/favicon.png"),
            username: "User3",
        },
        {
            imageURL: require("../assets/img/favicon.png"),
            username: "User3",
        },

    ]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchBarView}>
                <TextInput
                    placeholder="Search for a user..."
                    placeholderTextColor="#161B22"
                    style={styles.searchBar}
                />
            </View>
            <ScrollView contentContainerStyle={styles.view}>
                { users.map((user, key) => {
                    return (
                        <View key={key} style={styles.listItem}>
                            <Image style={styles.listPicture} source={user.imageURL}/>
                            <Text style={styles.listUsername}>{user.username}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    searchBarView: {
        paddingBottom: 70,
        // borderColor: '#151515',
        borderWidth: 1,
        backgroundColor: 'white',
    },
    searchBar: {
        backgroundColor: '#dbdbdb',
        borderRadius: 5,
        paddingHorizontal: 20,
        position: 'absolute',
        top: 30,
        left: '5%',
        width: '90%',
    },
    list: {
        flex: 10,
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginHorizontal: '5%',
        backgroundColor: '#ececec',
        borderRadius: 5,
    },
    listItem: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginVertical: 10,
    },
    listPicture: {
        marginHorizontal: 15,
        width: 20,
        height: 20,
    },
    listUsername: {
        alignItems: 'stretch',
    },
});

export default HomeScreen;