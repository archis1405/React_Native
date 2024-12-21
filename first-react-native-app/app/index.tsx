import { Text , View , StyleSheet } from "react-native";

export default function HomeScreen() {
    return(
        <View
            style={styles.parentContiner}
        >
            <View
            style={styles.todoContainer}
        >
            <Text>
                HOME SCREEN 
                </Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    parentContiner: {
        justifyContent: "center",
        backgroundColor: "#f0f0f0",
        flex: 1
    },
    
    todoContainer : {
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor:"#1a759e",
       
    }
})

