import { View , StyleSheet, TextInput } from "react-native";
import { TodoItem } from "./todoItem";
import { theme } from "./theme";
import { useState } from "react";

type TodoItem = {
    todoValue : string,
    isCompleted? : boolean,
    markComplete: () => void

}
export default function HomeScreen() {

    const [todo , setTodo] = useState<string>("");
    const [todoList , setTodoList] =useState<TodoItem[]>([]);

    function handleChange(data: string){
        setTodo(data);
    }

    function handleSubmit(){
        console.log("The new TODO is :: ",todo);
        setTodoList
        ([
            ...todoList,
            {
                todoValue : todo,
                isCompleted : false,
                markComplete : () => handleTodoCompletion(todoList.length)
            }
        ]);

        setTodo("");
    }

    function handleTodoCompletion(todoIndex : number){
        const newTodoList = todoList.map((currentTodo, index) => {
            if(index === todoIndex){
                return {
                    ...currentTodo,
                    isCompleted : !currentTodo.isCompleted
                    
                }
            }
            return currentTodo;
        });

        setTodoList(newTodoList);

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
            {todoList.map((currentTodo, index) => (
                <TodoItem
                    key={index}
                    todoValue={currentTodo.todoValue}
                    isCompleted={currentTodo.isCompleted}
                    markComplete={() => handleTodoCompletion(index)}
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