import { Provider as PaperProvider } from 'react-native-paper';
import GetStartedScreen from './src/screens/GetStartedScreen';
import { useThemeConfig } from './src/config/theme/theme';

export default function App() {
  const theme = useThemeConfig();
  return (
    <PaperProvider theme={theme}>
      <GetStartedScreen />
    </PaperProvider>
  );
}