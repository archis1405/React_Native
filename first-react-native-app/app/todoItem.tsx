import { Text , View , TouchableOpacity ,  StyleSheet , Alert, TextInput } from "react-native";
import { theme } from "./theme";

type TodoItemProps = {
    todoValue : String, 
    isCompleted? : boolean // ? --> means optional
    markComplete : () => void
}
export function TodoItem({todoValue , isCompleted , markComplete } : TodoItemProps) {

    function handlePress(){
            Alert.alert(
                "COMPLETED TODO", 
                `Are you sure you want to mark this TODO as DONE? ${isCompleted ? 'pending' : 'completed'}`,
                [
                    {
                        text : "DONE",
                        onPress : () => markComplete()
                    },
                    {
                        text : "CANCEL",
                        onPress : () => console.log("Cancel pressed")
                    }
                ]
            )
        }

    return(
                    <View
                    style={styles.todoContainer}
                    >
                    <Text
                        style = {
                            [
                                styles.todoText,
                                isCompleted ? styles.textCompleted : undefined
                            ]
                        }
                    >
                        {todoValue}
                        </Text>
        
                        <TouchableOpacity
                            style={
                                //Array is used for passing more than one styles
                                [
                                    styles.button,
                                    isCompleted ? styles.buttonCompleated : undefined
                                ]
                            }
                            onPress={handlePress}
                        >
                            <Text
                                style={styles.buttonText}
                            >
                                DONE 
                            </Text>
                        </TouchableOpacity>
                </View>
                
    )
}

const styles = StyleSheet.create({
    
    
    todoContainer : {
        paddingVertical: 20,
        paddingHorizontal: 6,
        borderBottomWidth: 1,
        borderBottomColor: theme.lightBlue,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
       
    },

    todoText : {
        fontSize: 20,
        fontWeight: "bold",
    },

    button : { 
        borderRadius: 5,
        padding: 6,
        backgroundColor: theme.lightRed,
    },

    buttonText : {
        color : theme.colorWhite,
        textAlign : "center",
        fontWeight : "bold",
        letterSpacing : 1.2,
        textTransform : "uppercase"
    },

    buttonCompleated : {
        backgroundColor: theme.lightgreen,
    },

    textCompleted : {
        textDecorationLine: "line-through",
        color: theme.grey,
        borderBottomColor: theme.black,
    }
})