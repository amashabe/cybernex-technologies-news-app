import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

const GetStartedScreen = () => {
    const theme = useTheme();
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: theme.colors.primary }}>GetStartedScreen</Text>
        </View>
    )
}

export default GetStartedScreen;