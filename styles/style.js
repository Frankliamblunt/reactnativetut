import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
    headerText:{
        textAlign:"center",
        fontWeight:"bold",
    },  
    header:{
        textAlign:"center",
        fontWeight:"bold",
    },
    listItem:{
        backgroundColor:"#ddd",
        flexDirection:"row",
        marginVertical:10,
        padding:10,
    },
    listName:{
        flex:0.5,
        textAlign:"center",
        alignItems:"flex-start",
    },
    listSalary:{
        flex:0.5,
        textAlign:"center",
        alignItems:"flex-start",
    },
    input:{
        width: width / 1.3,
        borderWidth:1,
        borderColor:"#000",
        borderRadius:20,
        margin:10,
        paddingVertical:5,
    },
});

export {styles};