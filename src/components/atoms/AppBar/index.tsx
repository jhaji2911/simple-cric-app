import React from 'react';
import { View, StyleSheet } from 'react-native';

interface BlueBarProps {
	width: number;
}

const BlueBar: React.FC<BlueBarProps> = ({ width }) => (
	<View style={[styles.bar, { width }]} />
);

const styles = StyleSheet.create({
	bar: {
		height: 10,
		backgroundColor: 'blue',
		borderRadius: 5,
		marginTop: 5,
	},
});

export default BlueBar;
