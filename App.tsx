import { Provider as PaperProvider } from 'react-native-paper';
import { useThemeConfig } from './src/config/theme/theme';
import RootNavigator from './src/navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const theme = useThemeConfig();
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}