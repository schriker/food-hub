import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useGoogleFonts from './hooks/useGoogleFonts';
import AppLoading from 'expo-app-loading';
import Navigation from './navigation';

import { store } from './store/store';
import { Provider } from 'react-redux';

export default function App() {
  const isLoadingComplete = useGoogleFonts();

  if (!isLoadingComplete) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
