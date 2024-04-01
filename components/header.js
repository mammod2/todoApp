import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function header(){
    return(
        <View style= {styles.header}>
            <Text style={styles.title}>My todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 80,
        paddingTop: 38,
        
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold'
    }    
})
