import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { useNavigation, useRoute } from "@react-navigation/native";
import logoImg from "../../assets/logo-nlw-esports.png";
import { styles } from "./styles";
import { GameParams } from "../../@types/navigation";
import { TouchableOpacity, View, Image, FlatList } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { THEME } from "../../theme";
import { Heading } from "../../components/Heading";
import { DuoCard } from "../../components/DuoCard";

export function Games() {
  const navigation = useNavigation();
  const route = useRoute();
  const [duos, setDuos] = useState ([]);
  const game = route.params as GameParams;
  console.log(game);

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    fetch(`http://192.168.1.107:4000/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => 
      setDuos(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo} />
          <View style={styles.right} />
        </View>
        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />
        <Heading 
        title = {game.title}
        subTitle = "Conecte-se e comece a jogar!"
        />
        <FlatList 
        data ={duos}
        keyExtractor ={item => item.id}
        renderItem ={({item}) => (
          <DuoCard data= {duos[0]}/>
        )} 
        />
      </SafeAreaView>
    </Background>
  );
}
