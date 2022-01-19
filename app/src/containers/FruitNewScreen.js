import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
function fruitNewScreen() {
    const [selectedValue, setSelectedValue] = useState("Kiwi");
    const [fruits, setFruits] = useState(null);
    const [fruitName, setFruitName] = useState('');
    const [fruitPrice, setFruitPrice] = useState(0);
    const getFruits = () => {
        fetch("http://10.0.2.2:8080/fruits").then(response => response.json()).then((responseJson) => {
            console.log('getting data from fetch:', responseJson);
            setFruits(responseJson);
        }).catch(error => console.log(error));
    }

    useEffect(() => {
        getFruits();
    }, [])
    const checkInput = () => {
        var name = fruitName;
        var price = fruitPrice;
        var flag = false;
        var numbers = /[0-9.]/
        if (price.valueOf() === 0) {
            Alert.alert("Por favor, rellena los campos para poder añadir la fruta deseada.");
        } else {
            if (price.length != 0) {
                for (let i = 0; i < price.length; i++) {
                    if (!price.charAt(i).match(numbers)) {
                        Alert.alert("Por favor, introduce un formato numérico válido.");
                        break;
                    }
                }
                if(name != null){
                    for (let i = 0; i < fruits.length; i++) {
                        if(name === fruits[i].name) {
                            Alert.alert("Esta fruta ya está en lista.");
                            flag = true;
                            break;
                        } else {
                            flag = false;                           
                        }
                    }
                    if(flag === false){
                        console.log("*");
                        addFruit();
                    }

                }
                
            }
        }
    }

    const addFruit = () => {
        fetch('http://10.0.2.2:8080/fruits', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": fruitName,
                "price": fruitPrice
            }),
        }).then((responseJson) => {
            console.log('getting data from fetch', responseJson);
            Alert.alert('¡La fruta se ha insertado en la lista!');
            setFruitName(null);
            setFruitPrice(null);
        }).catch(error => console.log(error));
    }
    return (
        <View>
            <Text>En esta ventana para añadir nuevas frutas. Por favor, selecciona una fruta y precio para la fruta que desea añadir.</Text>
            <Picker selectedValue={selectedValue} onValueChange={pickerValue => (setSelectedValue(pickerValue), setFruitName(pickerValue))}>
                <Picker.Item label="Kiwi" value="Kiwi" />
                <Picker.Item label="Manzana" value="Manzana" />
                <Picker.Item label="Melocotón" value="Melocotón" />
                <Picker.Item label="Naranja" value="Naranja" />
                <Picker.Item label="Pera" value="Pera" />
                <Picker.Item label="Piña" value="Piña" />
                <Picker.Item label="Plátano" value="Plátano" />
                <Picker.Item label="Uvas" value="Uvas" />
                <Picker.Item label="Cerezas" value="Cerezas" />
                <Picker.Item label="Sandía" value="Sandía" />
                <Picker.Item label="Melón" value="Melón" />
                <Picker.Item label="Fresa" value="Fresa" />
                <Picker.Item label="Mandarina" value="Mandarina" />
            </Picker>
            <TextInput placeholder="Introduce un precio" onChangeText={price => setFruitPrice(price)} />
            <TouchableOpacity onPress={checkInput}>
                <Text>Añadir</Text>
            </TouchableOpacity>
        </View>
    )
}

export default fruitNewScreen;