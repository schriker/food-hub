import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useGoogleFonts from './hooks/useGoogleFonts';
import useColorScheme from './hooks/useColorScheme';
import AppLoading from 'expo-app-loading';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useGoogleFonts();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}