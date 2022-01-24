import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import body from "../styles/Body";
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
        var flag = false;
        var numbers = /[0-9.]/
        if (fruitPrice == 0) {
            Alert.alert("Por favor, rellena los campos para poder añadir la fruta deseada.");
        } else {
            if (fruitPrice.length != 0) {
                for (let i = 0; i < fruitPrice.length; i++) {
                    if (isNaN(fruitPrice)) {
                        Alert.alert("Por favor, introduce un formato numérico válido.");
                        flag = true;
                        break;
                    }
                    if (fruitName != null) {
                        for (let i = 0; i < fruits.length; i++) {
                            if (fruitName === fruits[i].name) {
                                Alert.alert("Esta fruta ya está en lista.");
                                flag = true;
                                break;
                            } else {
                                flag = false;
                            }
                        }
                        if (flag === false) {
                            addFruit();
                        }
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
        <View style={body.contenedor}>
            <Text style={body.paragraph}>En esta ventana para añadir nuevas frutas. Por favor, selecciona una fruta y precio para la fruta que desea añadir.</Text>
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
                <Picker.Item label="Papaya" value="Papaya" />
                <Picker.Item label="Fresa" value="Fresa" />
                <Picker.Item label="Mango" value="Mango" />
            </Picker>
            <TextInput placeholder="Introduce un precio" onChangeText={price => setFruitPrice(price)} style={body.input} />
            <TouchableOpacity onPress={checkInput} style={body.button}>
                <Text style={body.buttonText}>Añadir</Text>
            </TouchableOpacity>
        </View>
    )
}

export default fruitNewScreen;