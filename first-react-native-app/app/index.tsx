import { ScrollView, StyleSheet , TextInput  } from "react-native";
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
        <ScrollView
            style ={styles.container}
            contentContainerStyle = {{  
                paddingBottom:16,
                paddingTop: 16,
                justifyContent: "center",
                
            }}
            stickyHeaderIndices = {[0]} // To fix the text input at the top
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colorWhite,
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