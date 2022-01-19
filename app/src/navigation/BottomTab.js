import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import fruitListStack from './FruitListStack';
import fruitNewStack from './FruitNewStack';
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return(
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarStyle:{
                backgroundColor: "#2E2211",
            },
            tabBarActiveBackgroundColor: "#FFFEFB",
               
            
            tabBarIcon: ({color, size, focused}) => {
                let iconName;
                if(route.name === 'Menu') {
                    iconName = focused ? 'list' : 'list-outline'
                } else if (route.name === 'Añadir fruta') {
                    iconName = focused ? 'nutrition' : 'nutrition-outline'
                }
                return <Ionicons name = {iconName} size={size} color={color}/>;
            },
            
        })}>
            <Tab.Screen name="Menu" component={fruitListStack} options={{ headerShown: false }} />
            <Tab.Screen name="Añadir fruta" component={fruitNewStack} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}
export default BottomTabNavigator;