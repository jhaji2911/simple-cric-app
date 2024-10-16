import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface LabelProps {
	text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => (
	<Text style={styles.label}>{text}</Text>
);

const styles = StyleSheet.create({
	label: {
		fontSize: 16,
		marginBottom: 4,
	},
});

export default Label;
