import { StyleSheet } from "react-native";
const body = StyleSheet.create({
    contenedor:{
        backgroundColor: "#D7AB6C",
       
    },
    imagenes:{
        width: 200, 
        height:200,
        alignSelf:"center",
        backgroundColor:'white',
        borderRadius: 10
    },
    nombre:{
        fontWeight:"bold",
        alignSelf:"center",
        color:'black'
    },
    precio:{
        fontWeight:"bold",
        alignSelf:"center",
        color:'red'
    }
});
export default body;