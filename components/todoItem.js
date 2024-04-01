import { StyleSheet,Text, TouchableOpacity, View } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

export default function todoItem({item , pressHandler}){
    

    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
            <MaterialIcons name='delete' size={18} color= '#333'/>
            <Text style={styles.text} > {item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor: "#FFFF",
        borderWidth: 2,
        borderRadius: 10,
        flex:1, 
        flexDirection: 'row'
    },
    text:{
        marginLeft:10
    }
})