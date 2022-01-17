import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet,FlatList,Image } from "react-native";
 
function fruitListScreen({route}) {
   const [fruits,setFruits] = useState(null);
   
   useEffect (() => {
    fetch ("http://10.0.2.2:8080/fruits")
    .then (response => response.json())
    .then((responseJson) =>{
        console.log('getting data from fetch',responseJson);
        setFruits(responseJson);
    })
    .catch(error => console.log(error));
},[])


const renderItem = ({item}) => (
 
    <View >
       
        <View style={{ marginLeft:'10%'}}>
       
               <Image
                        style={{width: 50, height:50}}
                        source={require('../assets/manzana.jpg')}/>
            <Text style={{fontWeight:"bold"}}> Nombre: <Text>{item.name} </Text></Text>
            </View>

            <View style={{ marginLeft:'75%'}}>
            <Text >Precio:{item.price} </Text>
            </View>
    </View>
)
   
   return(
        <View>
           <FlatList
        data={fruits}
        renderItem={renderItem}
        keyExtractor={item =>item.id}
        />
        </View>
    );
}


const style = StyleSheet.create({
    contenedor:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#EDC669",
       
    }
})
export default fruitListScreen;