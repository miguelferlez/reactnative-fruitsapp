import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import fruitListScreen from '../containers/FruitListScreen';
const Stack = createNativeStackNavigator();
function fruitListStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Lista de frutas" component={fruitListScreen} options={{
                headerTitleAlign: 'center'                
            }}/>
        </Stack.Navigator>
    );
}
export default fruitListStack;