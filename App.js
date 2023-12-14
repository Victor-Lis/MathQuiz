import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/Routes';

import AuthProvider from './src/Contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#252525' style="light" translucent={false} />
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}
