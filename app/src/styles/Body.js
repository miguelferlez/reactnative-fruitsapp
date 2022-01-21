import { StyleSheet } from "react-native";
const body = StyleSheet.create({
    contenedor: {
        backgroundColor: 'rgb(215,171,108)',
        height: '100%'
    },
    imagenes: {
        width: 150,
        height: 150,
    },
    nombre: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20
    },
    precio: {
        fontWeight: 'bold',
        color: 'red',
        fontSize: 18
    },

    item: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: 'transparent',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'rgb(225,181,118)',
    },
    itemContent: {
        width: '50%',
        paddingLeft: 20
    },
    paragraph: {
        color: 'black',
        padding: 16
    },
    input: {
        borderBottomWidth: 2,
        borderColor: 'black',
        color: 'black',
        marginHorizontal: 16,
        padding: 0
    },
    button: {
        backgroundColor: 'rgb(129,93,39)',
        borderRadius: 5,
        margin: 20,
        width: '50%',
        paddingVertical: 5,
        alignSelf: 'center'
    },
    buttonText: {
        fontSize: 22,
        color: 'white',
        alignSelf: 'center',

    }
});
export default body;