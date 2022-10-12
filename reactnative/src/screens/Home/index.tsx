import { FlatList, Image, View } from "react-native";
import logoImg from '../../assets/logo-nlw-esports.png'
import { GameCard, GameCardProps } from "../../components/GameCard";
import { Heading } from "../../components/Heading";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])
  
  useEffect(() =>{
    fetch('http://192.168.1.107:3000/games')
    .then(response => response.json())
    .then(data => setGames(data))
  }, [])

  return (
    <Background>
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
    </Background>
  );
}
