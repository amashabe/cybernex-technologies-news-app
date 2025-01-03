import { configureFonts, DefaultTheme } from "react-native-paper";
import { useColorScheme } from "react-native";
import { fonts } from "./fonts";
import { darkColorScheme, lightColorScheme } from "./colors";

// @TODO Temporary const until dark mode colours are ready.
const DOES_SUPPORT_DARK_MODE = false;

export function useThemeConfig() {
  const colorScheme = useColorScheme();
  return {
    ...DefaultTheme,
    colors: DOES_SUPPORT_DARK_MODE && colorScheme === "dark" ? darkColorScheme : lightColorScheme,
    fonts: configureFonts({ config: fonts }),
  };
}
