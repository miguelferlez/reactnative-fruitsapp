import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import fruitNewScreen from "../containers/FruitNewScreen";
const Stack = createNativeStackNavigator();
function fruitNewStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Añadir nueva fruta" component={fruitNewScreen} options={{
                headerTitleAlign: 'center', headerStyle:{ backgroundColor: '#815D27' }
            }}/>
        </Stack.Navigator>
    )
}
export default fruitNewStack;