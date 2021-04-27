import * as React from 'react';
import {StyleSheet, Text, View} from "react-native";

const RepositoryScreen = () => {
    return (
        <View style={styles.view}>
            <Text>Repository Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default RepositoryScreen;