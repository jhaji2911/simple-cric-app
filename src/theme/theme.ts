import {
	MD3LightTheme as DefaultTheme,
	configureFonts,
} from 'react-native-paper';
// maybe we could use adaptNavigationTheme, but just for the sake of the demo we will avoid it
//  as the problem statement says, "the app should be able to scale, for scaling needs we are adding react navigation too"
import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';

const FontFamily = {
	RobotoRegular: 'Roboto-Regular',
	RobotoBold: 'Roboto-Bold',
	RobotoSemiBold: 'Roboto-SemiBold',
	RobotoMedium: 'Roboto-Medium',
};

const fontConfig = {
	displaySmall: {
		fontFamily: FontFamily.RobotoRegular,
		fontSize: 10,
		fontWeight: '400',
		letterSpacing: 0,
		lineHeight: 12,
	},

	displayMedium: {
		fontFamily: FontFamily.RobotoRegular,
		fontSize: 18,
		fontWeight: '400',
		letterSpacing: 0,
		lineHeight: 20,
	},

	displayLarge: {
		fontFamily: FontFamily.RobotoRegular,
		fontSize: 20,
		fontWeight: '400',
		letterSpacing: 0,
		lineHeight: 22,
	},

	headlineSmall: {
		fontFamily: FontFamily.RobotoBold,
		fontSize: 24,
		fontWeight: '400',
		letterSpacing: 0,
		lineHeight: 32,
	},

	headlineMedium: {
		fontFamily: FontFamily.RobotoBold,
		fontSize: 28,
		fontWeight: '400',
		letterSpacing: 0,
		lineHeight: 36,
	},

	headlineLarge: {
		fontFamily: FontFamily.RobotoBold,
		fontSize: 32,
		fontWeight: '400',
		letterSpacing: 0,
		lineHeight: 40,
	},

	titleSmall: {
		fontFamily: FontFamily.RobotoSemiBold,
		fontSize: 14,
		fontWeight: '500',
		letterSpacing: 0.1,
		lineHeight: 20,
	},

	titleMedium: {
		fontFamily: FontFamily.RobotoSemiBold,
		fontSize: 16,
		fontWeight: '500',
		letterSpacing: 0.15,
		lineHeight: 24,
	},

	titleLarge: {
		fontFamily: FontFamily.RobotoSemiBold,
		fontSize: 22,
		fontWeight: '400',
		letterSpacing: 0,
		lineHeight: 28,
	},

	labelSmall: {
		fontFamily: FontFamily.RobotoMedium,
		fontSize: 11,
		fontWeight: '500',
		letterSpacing: 0.5,
		lineHeight: 16,
	},

	labelMedium: {
		fontFamily: FontFamily.RobotoMedium,
		fontSize: 12,
		fontWeight: '500',
		letterSpacing: 0.5,
		lineHeight: 16,
	},

	labelLarge: {
		fontFamily: FontFamily.RobotoMedium,
		fontSize: 14,
		fontWeight: '500',
		letterSpacing: 0.1,
		lineHeight: 20,
	},

	bodySmall: {
		fontFamily: FontFamily.RobotoRegular,
		fontSize: 12,
		fontWeight: '400',
		letterSpacing: 0.4,
		lineHeight: 16,
	},

	bodyMedium: {
		fontFamily: FontFamily.RobotoRegular,
		fontSize: 14,
		fontWeight: '400',
		letterSpacing: 0.25,
		lineHeight: 20,
	},

	bodyLarge: {
		fontFamily: FontFamily.RobotoRegular,
		fontSize: 16,
		fontWeight: '400',
		letterSpacing: 0.15,
		lineHeight: 24,
	},
} as const;
export const theme = {
	...DefaultTheme,
	...NavigationDefaultTheme,
	fonts: configureFonts({ config: fontConfig }),
	colors: {
		...DefaultTheme.colors,
		primary: '#1E90FF', // Dodger Blue for primary elements
		accent: '#FF6347', // Tomato for accent elements
		background: '#F9F9F9', // Light gray background for better readability
		surface: '#FFFFFF', // White surface for cards
		text: '#212121', // Dark gray text for high contrast
		error: '#B00020', // Red for error messages
		disabled: 'rgba(33, 33, 33, 0.38)', // Light gray for disabled text
		placeholder: 'rgba(33, 33, 33, 0.54)', // Slightly lighter gray for placeholders
		backdrop: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black for backdrops
	},
};
