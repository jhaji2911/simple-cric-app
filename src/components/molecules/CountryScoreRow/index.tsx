import React, { useEffect, useRef } from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	useWindowDimensions,
	Animated,
	Easing,
	TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';

interface CountryScoreRowProps {
	country: string;
	score: number | null;
	valid: boolean;
	onChange: (name: string) => void;
	onDelete: () => void;
	isFirst: boolean;
}

const MAX_SCORE = 100; // MAXXING on scores

const CountryScoreRow: React.FC<CountryScoreRowProps> = ({
	country,
	score,
	valid,
	onChange,
	onDelete,
	isFirst,
}) => {
	const { width } = useWindowDimensions();
	const isWideScreen = width > 600;
	const { colors } = useTheme();

	const barWidth = useRef(new Animated.Value(0)).current;

	// Resetting the bar to let it mount
	useEffect(() => {
		barWidth.setValue(0);
	}, []);

	// Just animate already
	useEffect(() => {
		const targetWidth =
			score !== null && valid ? (score / MAX_SCORE) * (width - 80) : 0;

		Animated.timing(barWidth, {
			toValue: targetWidth,
			duration: 500,
			easing: Easing.out(Easing.exp),
			useNativeDriver: false, // native driver, 🌝
		}).start();
	}, [score, valid, width]);

	const displayScore =
		score !== null && !Number.isNaN(score) ? score.toFixed(2) : '-';

	return (
		<View
			style={[styles.row, isWideScreen ? styles.rowWide : styles.rowNarrow]}
		>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					value={country}
					placeholder="Enter Country"
					onChangeText={onChange}
					placeholderTextColor="#aaa"
				/>
				{!isFirst && (
					<TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
						{/* @ts-expect-error we will have to define type for accent */}
						<Ionicons name="trash-outline" size={24} color={colors.accent} />
					</TouchableOpacity>
				)}
			</View>

			<View style={styles.scoreContainer}>
				<Text style={styles.score}>{displayScore}</Text>
				<Animated.View style={[styles.bar, { width: barWidth }]} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	row: {
		marginBottom: 20,
		alignItems: 'center',
	},
	rowWide: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	rowNarrow: {
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		marginBottom: 8,
	},
	input: {
		flex: 1,
		// TODO: maybe we could have imported it from theme, but it doesn't supports for now
		borderColor: '#1E90FF',
		borderWidth: 1.5,
		borderRadius: 8,
		padding: 12,
		fontSize: 16,
		color: '#333',
		backgroundColor: '#F9F9F9',
	},
	deleteButton: {
		marginLeft: 8,
		padding: 4,
	},
	scoreContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		marginTop: 4,
	},
	score: {
		width: 60,
		textAlign: 'right',
		fontSize: 18,
		color: '#1E90FF',
		fontWeight: '600',
		marginRight: 8,
	},
	bar: {
		height: 12,
		backgroundColor: '#1E90FF',
		borderRadius: 6,
	},
});

export default CountryScoreRow;
