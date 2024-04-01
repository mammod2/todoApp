import { View,StyleSheet,  Text, TextInput, Button } from 'react-native';
import React , {useState} from 'react';


export default function addTodo({submitTodo}){
    const [text , setText] = useState('')
    const changeHandler = (val) =>{
        setText(val);
    }

    return(
        <View>
            <TextInput 
            style= {styles.input}
            placeholder='new todo...'
            onChangeText={changeHandler}/>
            <View style={styles.button}>
            <Button onPress={()=> submitTodo(text)} title='add todo' color='black'></Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    input:{
        marginVertical: 20, 
        paddingHorizontal: 8,
        paddingVertical:6,
        borderRadius:5, 
        borderWidth:1, 
        borderColor: '#333333',
        backgroundColor: '#ffff'
    },
    button:{
        backgroundColor:'#FDFDFD',
        borderRadius: 15,
    }
})


 