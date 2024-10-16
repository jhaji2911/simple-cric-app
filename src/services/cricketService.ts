import { CricketScoreSchema, CricketScore } from 'src/types/cricketTypes';

const API_URL = 'https://assessments.reliscore.com/api/cric-scores/'; // can be imported from .env too

// Fetch and validate cricket scores from the server
export const fetchCricketScores = async (): Promise<CricketScore> => {
	const response = await fetch(API_URL);
	const data = await response.json();

	const parsedData = CricketScoreSchema.safeParse(data);
	if (!parsedData.success) {
		console.error('Invalid API response:', parsedData.error);
		throw new Error('Invalid data from server');
	}

	return parsedData.data;
};
