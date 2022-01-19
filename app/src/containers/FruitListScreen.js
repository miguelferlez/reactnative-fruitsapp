import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet,FlatList,Image } from "react-native";
 import body from "../styles/Body";
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
    
    
    <View style={body.contenedor}>
        {item.name === "Piña" ? 
        <Image
                    style={body.imagenes}
                    source={require('../assets/piña.png')}/>: null}
    
       {item.name === "Kiwi" ? 
        
        <Image
                    style={body.imagenes}
                    source={require('../assets/kiwiRM.png')}/>: null}
                    
        {item.name === "Manzana" ?             
        <Image
                    style={body.imagenes}
                    source={require('../assets/manzanaRM.png')}/>: null}
                    
      {item.name === "Melocotón" ?          
        <Image
                    style={body.imagenes}
                    source={require('../assets/melocotonRM.png')}/>: null}
                     
        {item.name === "Naranja" ? 
        <Image
                    style={body.imagenes}
                    source={require('../assets/naranjaRM.png')}/>: null}
                     
       {item.name === "Pera" ? 
        <Image
                    style={body.imagenes}
                    source={require('../assets/peraRM.png')}/>: null}
                    
        {item.name === "Plátano" ? 
        <Image
                    style={body.imagenes}
                    source={require('../assets/platanoRM.png')}/>: null}
                   
        {item.name === "Uvas" ? 
        <Image
                    style={body.imagenes}
                    source={require('../assets/uvasRM.png')}/>: null}
                    

        <Text style={body.nombre}> Nombre: <Text>{item.name} </Text></Text>
        

       
        <Text style={body.precio}>Precio:{item.price} </Text>
        

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

export default fruitListScreen;