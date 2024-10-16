import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

interface TextInputFieldProps {
	value: string;
	onChange: (text: string) => void;
	placeholder: string;
}

const TextInputField: React.FC<TextInputFieldProps> = ({
	value,
	onChange,
	placeholder,
}) => {
	const { colors } = useTheme();
	return (
		<TextInput
			style={[styles.input, { borderColor: colors.primary }]}
			value={value}
			onChangeText={onChange}
			placeholder={placeholder}
			// @ts-expect-error we will have to define colour type for react-native-paper theme colors in future.
			placeholderTextColor={colors.placeholder}
		/>
	);
};

const styles = StyleSheet.create({
	input: {
		padding: 8,
		borderWidth: 1,
		borderRadius: 4,
		width: '100%',
	},
});

export default TextInputField;
