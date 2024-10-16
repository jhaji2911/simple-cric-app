import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { AppLabel, AppBar, AppInput } from '@/components/atoms';

interface CountryScoreRowProps {
	country: string;
	score: number | null;
	onChange: (value: string) => void;
}

const CountryScoreRow: React.FC<CountryScoreRowProps> = ({
	country,
	score,
	onChange,
}) => {
	const [isWideScreen, setIsWideScreen] = useState(
		Dimensions.get('window').width >= 600,
	);

	// Listener for screen size changes
	useEffect(() => {
		const handleResize = () => {
			setIsWideScreen(Dimensions.get('window').width >= 600);
		};

		const subscription = Dimensions.addEventListener('change', handleResize);
		return () => subscription.remove(); // Cleanup on unmount
	}, []);

	return (
		<View style={[styles.container, isWideScreen ? styles.row : styles.column]}>
			<AppInput
				value={country}
				onChange={onChange}
				placeholder="Enter country name"
			/>
			<AppLabel text={`Average: ${score ?? '-'}`} />
			{score !== null && <AppBar width={score * 2} />}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		padding: 10,
		borderWidth: 1,
		borderRadius: 4,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	column: {
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
});

export default CountryScoreRow;
