import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useGoogleFonts from './hooks/useGoogleFonts';
import AppLoading from 'expo-app-loading';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useGoogleFonts();

  if (!isLoadingComplete) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}