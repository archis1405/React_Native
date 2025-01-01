import { View , StyleSheet, TextInput } from "react-native";
import { TodoItem } from "./todoItem";
import { theme } from "./theme";
import { useState } from "react";


export default function HomeScreen() {

    const [todo , setTodo] = useState<string>("");
    const [todoList , setTodoList] =useState<String[]>([]);

    function handleChange(data: string){
        setTodo(data);
    }

    function handleSubmit(){
        console.log("The new TODO is :: ",todo);
        setTodoList
        ([
            ...todoList,
            todo
        ]);

        setTodo("");
    }

    return(
        <View
            style ={styles.container}
        >
            <TextInput 
                placeholder="Add a todo"
                style={styles.textInput}
                keyboardType="default"
                onChangeText={handleChange}
                returnKeyType="done"
                onSubmitEditing={handleSubmit}
                value = {todo}
            />
            {todoList.map((todo, index) => (
                <TodoItem
                    key={index}
                    todoValue={todo}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colorWhite,
        justifyContent: "center",
        flex: 10,
    },

    textInput:{
        borderWidth: 1,
        borderColor: theme.lightBlue,
        borderRadius: 50,
        padding: 10,
        marginHorizontal: 10,
        fontSize: 20,
    }

})