import { z } from 'zod';

// Zod schema for validating the API response
export const CricketScoreSchema = z.array(
	z.tuple([z.string(), z.number()]), // Each element is a [country: string, score: number] tuple
);

// TypeScript type inferred from Zod schema
export type CricketScore = z.infer<typeof CricketScoreSchema>;
