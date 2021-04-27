import * as React from 'react';
import {StyleSheet, Text, View} from "react-native";

const FavoritesScreen = () => {
    return (
        <View style={styles.view}>
            <Text>Favorites Screen</Text>
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

export default FavoritesScreen;