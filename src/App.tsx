import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { ScoreList } from '@/components/organisms';
import { theme } from '@/theme/theme';

const App: React.FC = () => (
	<PaperProvider theme={theme}>
		<ScoreList />
	</PaperProvider>
);

export default App;
