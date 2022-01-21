import React, { useState, useEffect, useCallback } from "react";
import { View, Text, FlatList, Image, RefreshControl } from "react-native";
import body from "../styles/Body";
function fruitListScreen() {
    const [fruits, setFruits] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const getFruits = () => {
        fetch("http://10.0.2.2:8080/fruits").then(response => response.json()).then((responseJson) => {
            console.log('getting data from fetch:', responseJson);
            setFruits(responseJson);
        }).catch(error => console.log(error));
    }
    const onRefresh = useCallback(() => {
        setRefresh(true);
        wait(2000).then(() => setRefresh(false), getFruits());
    }, [])
    useEffect(() => {
        getFruits();
    }, [])
    function fruitImage(name) {
        switch (name) {
            case 'Kiwi':
                return <Image style={body.imagenes} source={require('../assets/kiwi.png')} />
            case 'Manzana':
                return <Image style={body.imagenes} source={require('../assets/manzana.png')} />
            case 'Melocotón':
                return <Image style={body.imagenes} source={require('../assets/melocoton.png')} />
            case 'Naranja':
                return <Image style={body.imagenes} source={require('../assets/naranja.png')} />
            case 'Pera':
                return <Image style={body.imagenes} source={require('../assets/pera.png')} />
            case 'Piña':
                return <Image style={body.imagenes} source={require('../assets/piña.png')} />
            case 'Plátano':
                return <Image style={body.imagenes} source={require('../assets/platano.png')} />
            case 'Sandía':
                return <Image style={body.imagenes} source={require('../assets/sandia.png')} />
            case 'Uvas':
                return <Image style={body.imagenes} source={require('../assets/uvas.png')} />
            case 'Mango':
                return <Image style={body.imagenes} source={require('../assets/mango.png')} />
            case 'Papaya':
                return <Image style={body.imagenes} source={require('../assets/papaya.png')} />
            case 'Fresa':
                return <Image style={body.imagenes} source={require('../assets/fresas.png')} />
            case 'Cerezas':
                return <Image style={body.imagenes} source={require('../assets/cerezas.png')} />
            default:
                return <Image style={body.imagenes} source={require('../assets/notfound.png')} />;
        }
    }
    const fruitItem = ({ item }) => (
        <View style={body.item}>
            {fruitImage(item.name)}
            <View style={body.itemContent}>
                <Text style={body.nombre}>{item.name}</Text>
                <Text style={body.precio}>{item.price} €/Kg.</Text>
            </View>
        </View>
    )
    return (
        <View style={body.contenedor}>
            <FlatList
                data={fruits}
                renderItem={fruitItem}
                keyExtractor={item => item.id}
                refreshControl={
                    <RefreshControl
                        refreshing={refresh}
                        onRefresh={onRefresh}
                    />
                }
            />
        </View>
    );
}
export default fruitListScreen;