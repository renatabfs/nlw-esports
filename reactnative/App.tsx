import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Background } from './src/components/Background';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter'
import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts ({
    useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
  });

  return (
      <Background>
      <StatusBar style="light"
      backgroundColor='transparent'
      />
    {fontsLoaded ? <Home/> : <Loading /> }
      </Background>
  
  );
}

