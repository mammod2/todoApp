import { StyleSheet,Text, TouchableOpacity } from 'react-native';

export default function todoItem({item , pressHandler}){
    

    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}> {item.text}</Text>
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
    },
})