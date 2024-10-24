import constants from '@/utils/constants';
import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Switch, Text, useTheme, Button } from 'react-native-paper';
import { CountryScoreRow } from 'src/components/molecules';
import { fetchCricketScores } from 'src/services/cricketService';

const ScoreList: React.FC = () => {
	const [data, setData] = useState<[string, number][]>(
		constants.testData as [string, number][],
	);
	const [source, setSource] = useState<'Test' | 'Server'>('Test');
	const [countries, setCountries] = useState([
		{ name: '', average: null, valid: false },
	]);

	const { colors } = useTheme();

	useEffect(() => {
		if (source === 'Server') {
			void fetchCricketScores().then((fetchedData: [string, number][]) => {
				// type matching some one's gotta do it
				const formattedData = fetchedData.map(
					([country, score]: [string, number]) =>
						[country, score] as [string, number],
				);
				setData(formattedData);
			});
		} else {
			setData(constants.testData as [string, number][]);
		}
	}, [source]);

	const handleInputChange = (index: number, name: string) => {
		const updatedCountries = [...countries];
		const matchingScores = data.filter(
			([country]) => country.toLowerCase() === name.toLowerCase(),
		);

		// Update the name
		updatedCountries[index].name = name;

		if (matchingScores.length) {
			// Exact match found, calculate average
			const avg =
				matchingScores.reduce((sum, [, score]) => sum + score, 0) /
				matchingScores.length;
			updatedCountries[index].average = avg;
			updatedCountries[index].valid = true;
		} else {
			// No exact match, display "-", like the problem said ✨
			updatedCountries[index].average = null;
			updatedCountries[index].valid = false;
		}

		setCountries(updatedCountries);
	};

	const handleDelete = (countryIndex: number) => {
		const updatedValue = countries.filter((_, index) => index !== countryIndex);
		setCountries(updatedValue);
	};

	const addCountryRow = () => {
		setCountries([...countries, { name: '', average: null, valid: false }]);
	};

	const handleToggleSwitch = () => {
		setSource(prev => (prev === 'Test' ? 'Server' : 'Test'));
	};

	return (
		<ScrollView style={styles.container}>
			<View style={styles.switchContainer}>
				<Text>
					Data Source: {source === 'Server' ? 'Server Data' : 'Test Data'}
				</Text>
				<Switch
					value={source === 'Server'}
					onValueChange={handleToggleSwitch}
					color={colors.primary}
				/>
			</View>

			{countries.map((country, index) => (
				<CountryScoreRow
					key={index}
					isFirst={index === 0}
					country={country.name}
					score={country.average}
					valid={country.valid}
					onChange={name => handleInputChange(index, name)}
					onDelete={() => handleDelete(index)}
				/>
			))}
			<Button icon="plus" mode="contained" onPress={addCountryRow}>
				Add Country
			</Button>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 16,
	},
	switchContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 16,
	},
});

export default ScoreList;
