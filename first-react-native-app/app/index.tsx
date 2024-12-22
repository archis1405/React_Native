import { Text , View , StyleSheet, TouchableOpacity, Alert } from "react-native";
import { theme } from "./theme";

export default function HomeScreen() {

    function handlePress(){
        Alert.alert("Delete todo", "Are you sure you want to delete the todo")
    }

    return(
        <View
            style={styles.parentContiner}
        >
            <View
            style={styles.todoContainer}
        >
            <Text
                style = {styles.todoText}
            >
                HOME SCREEN 
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handlePress}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        DELETE TODO 
                    </Text>
                </TouchableOpacity>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    parentContiner: {
        justifyContent: "center",
        backgroundColor: theme.colorWhite,
        flex: 1
    },
    
    todoContainer : {
        paddingVertical: 20,
        paddingHorizontal: 6,
        borderBottomWidth: 1,
        borderBottomColor: theme.lightBlue,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center"
    },

    todoText : {
        fontSize: 20,
        fontWeight: "bold",
    },

    button : {
        borderRadius: 5,
        padding: 8,
        backgroundColor: theme.lightRed,
    },

    buttonText : {
        color : theme.colorWhite,
        textAlign : "center",
        fontWeight : "bold",
        letterSpacing : 1.2,
        textTransform : "uppercase"
    }
})

