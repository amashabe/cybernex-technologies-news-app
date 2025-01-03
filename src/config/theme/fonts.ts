import { MD3TypescaleKey } from "react-native-paper";
import { MD3Type } from "react-native-paper/lib/typescript/types";

const fontRegular = "OpenSans-Regular";
const fontSemiBold = "OpenSans-SemiBold";

export const fonts: Partial<Record<MD3TypescaleKey, Partial<MD3Type>>> = {
  displayLarge: {
    fontFamily: fontRegular,
    fontSize: 57,
    letterSpacing: 0,
    lineHeight: 64,
  },
  displayMedium: {
    fontFamily: fontRegular,
    fontSize: 45,
    letterSpacing: 0,
    lineHeight: 52,
  },
  displaySmall: {
    fontFamily: fontRegular,
    fontSize: 36,
    letterSpacing: 0,
    lineHeight: 44,
  },
  headlineLarge: {
    fontFamily: fontRegular,
    fontSize: 32,
    letterSpacing: 0,
    lineHeight: 40,
  },
  headlineMedium: {
    fontFamily: fontRegular,
    fontSize: 28,
    letterSpacing: 0,
    lineHeight: 36,
  },
  headlineSmall: {
    fontFamily: fontRegular,
    fontSize: 24,
    letterSpacing: 0,
    lineHeight: 32,
  },
  titleLarge: {
    fontFamily: fontRegular,
    fontSize: 22,
    letterSpacing: 0,
    lineHeight: 28,
  },
  titleMedium: {
    fontFamily: fontSemiBold,
    fontSize: 16,
    letterSpacing: 0.15,
    lineHeight: 24,
  },
  titleSmall: {
    fontFamily: fontSemiBold,
    fontSize: 14,
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  labelLarge: {
    fontFamily: fontSemiBold,
    fontSize: 14,
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  labelMedium: {
    fontFamily: fontSemiBold,
    fontSize: 12,
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  labelSmall: {
    fontFamily: fontSemiBold,
    fontSize: 11,
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  bodyLarge: {
    fontFamily: fontRegular,
    fontSize: 16,
    letterSpacing: 0.5,
    lineHeight: 24,
  },
  bodyMedium: {
    fontFamily: fontRegular,
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: 20,
  },
  bodySmall: {
    fontFamily: fontRegular,
    fontSize: 12,
    letterSpacing: 0.4,
    lineHeight: 16,
  },
};
