import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import fruitListScreen from '../containers/FruitListScreen';
const Stack = createNativeStackNavigator();
function fruitListStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Lista de frutas" component={fruitListScreen} options={{
                headerTitleAlign: 'center'  , headerStyle:{ backgroundColor: 'rgb(129,93,39)' }, headerTitleStyle:{ color: 'white' }              
            }}/>
        </Stack.Navigator>
    );
}
export default fruitListStack;