import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

export default function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeTabs" component={TabNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}