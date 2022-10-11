import { FlatList, Image, View } from "react-native";
import logoImg from '../../assets/logo-nlw-esports.png'
import { GameCard, GameCardProps } from "../../components/GameCard";
import { Heading } from "../../components/Heading";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])
  
  useEffect(() =>{
    fetch('https://3333-renatabfs-nlwesports-k2dmsbz6w22.ws-us70.gitpod.io/games')
    .then(response => response.json())
    .then(data => setGames(data))
  }, [])

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Image source = {logoImg}
      style = {styles.logo}
      />

      <Heading 
      title="Encontre seu duo!"
      subTitle="Selecione o game que deseja jogar..."
      />
      <FlatList 
      data = {games}
      keyExtractor = {item => item.id}
      renderItem = {({item}) => (
        <GameCard 
        data={item}
       />
      )}
      horizontal = {true}
      showsHorizontalScrollIndicator = {false}
      contentContainerStyle = {styles.contentList}
      />
    </SafeAreaView>
    </SafeAreaProvider>
  );
}
