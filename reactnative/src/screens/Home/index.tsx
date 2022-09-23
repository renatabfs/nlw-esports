import { FlatList, Image, View } from "react-native";
import logoImg from '../../assets/logo-nlw-esports.png'
import { GameCard } from "../../components/GameCard";
import { Heading } from "../../components/Heading";
import { styles } from "./styles";
import { GAMES } from "../../utils/games";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source = {logoImg}
      style = {styles.logo}
      />

      <Heading 
      title="Encontre seu duo!"
      subTitle="Selecione o game que deseja jogar..."
      />
      <FlatList 
      data = {GAMES}
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
    </View>
  );
}
