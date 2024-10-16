import constants from '@/utils/constants';
import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { Switch, useTheme } from 'react-native-paper';
import { CountryScoreRow } from '@/components/molecules';
import { fetchCricketScores } from '@/services/cricketService';

const ScoreList: React.FC = () => {
	const [data, setData] = useState<[string, number][]>(
		constants.testData as [string, number][],
	);
	const [source, setSource] = useState<'Test' | 'Server'>('Test');
	const [input, setInput] = useState<string>('');
	const [average, setAverage] = useState<number | null>(null);
	const [isServerData, setIsServerData] = useState<boolean>(false); // Added state for Switch
	const { colors } = useTheme();

	useEffect(() => {
		// Fetch data from the server if the source is set to 'Server'
		if (source === 'Server') {
			void fetchCricketScores()
				.then(fetchedData => {
					// Ensure the fetched data is formatted as [string, number][]
					const formattedData = fetchedData.map(
						([country, score]: [string, number]) =>
							[country, score] as [string, number],
					);
					setData(formattedData);
				})
				.catch(error => {
					console.error('Error fetching scores:', error);
					// Optionally, handle error by setting a default state or showing a message
				});
		} else {
			// @ts-expect-error there is type mismatch, we will deal with it later
			setData(constants.testData as [string, number[]]); // Set to test data if not fetching from server
		}
	}, [source]);

	useEffect(() => {
		// Calculate the average score based on the input country
		const scores = data.filter(
			([country]) => country.toLowerCase() === input.toLowerCase(),
		);
		if (scores.length) {
			const avg =
				scores.reduce((sum, [, score]) => sum + score, 0) / scores.length;
			setAverage(avg);
		} else {
			setAverage(null);
		}
	}, [input, data]);

	// Toggle function for the Switch
	const handleToggleSwitch = () => {
		setIsServerData(prevState => !prevState);
		setSource(prevState => (prevState === 'Test' ? 'Server' : 'Test')); // Switch data source
	};

	return (
		<ScrollView style={styles.container}>
			<View style={styles.switchContainer}>
				<Text>Data Source: {isServerData ? 'Server Data' : 'Test Data'}</Text>
				<Switch
					value={isServerData}
					onValueChange={handleToggleSwitch}
					color={colors.primary} // Customize the switch color
				/>
			</View>
			<CountryScoreRow country={input} score={average} onChange={setInput} />
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
		marginVertical: 20,
	},
});

export default ScoreList;
