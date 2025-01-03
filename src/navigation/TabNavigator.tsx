import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { icon } from '../components/Icons';
import HomeScreen from '../screens/TabScreens/HomeScreen';
import DiscoverScreen from '../screens/TabScreens/DiscoverScreen';
import SavedNewsScreen from '../screens/TabScreens/SavedNewsScreen';
import SettingsScreens from '../screens/TabScreens/SettingsScreens';
import { useTheme } from 'react-native-paper';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    const theme = useTheme();
    return (
        <Tab.Navigator
            screenOptions={({ }) => ({
                headerShown: false,
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.secondary,
            })}>
            <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: icon.home }} />
            <Tab.Screen name="Discover" component={DiscoverScreen} options={{ tabBarIcon: icon.discover }} />
            <Tab.Screen name="Saved" component={SavedNewsScreen} options={{ tabBarIcon: icon.saved }} />
            <Tab.Screen name="Settings" component={SettingsScreens} options={{ tabBarIcon: icon.settings }} />
        </Tab.Navigator>
    );
}