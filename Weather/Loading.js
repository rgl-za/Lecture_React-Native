import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading(){
    return (
        <View style={styles.container}>
             <StatusBar barStyle="dark-content"/>
            <Text style={styles.text}>Getting the weather</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: '#F0E5CF'
    },
    text:{
        color: '#2c2c2c',
        fontSize: 30, //px를 붙일거면 string type, 숫자만 쓸거면 int type
    }
});

