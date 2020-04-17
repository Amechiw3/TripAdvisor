import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation'

function UserGuest(props) {
  const { navigation } = props
  return (
    <ScrollView style={style.viewBody} centerContent={true}>
      <Image 
      source={require("../../../assets/img/user-guest.jpg")} 
      style={style.image} 
      resizeMode="contain"
      />
      <Text style={style.title}>Consulta tu perfil de TripAdvisor</Text>
      <Text style={style.description}>
        ¿Comó describirias tu mejor restaurantes? Busca y visualiza los mejores 
        restaurantes de una fomra sencilla, vota cual te ha gustado más y 
        comenta como ha sido tu experiencia.
      </Text>
      <View style={style.viewBtn}>
        <Button 
          style={style.btnStyle} 
          containerStyle={style.btnContainer}
          title="Ver tú perfil"
          onPress={()=> navigation.navigate("Login")}
        />

      </View>
    </ScrollView>
  )
}

export default withNavigation(UserGuest)

const style = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center"
  },
  description: {
    textAlign: "center",
    marginBottom: 20
  },
  viewBtn: {
    flex: 1,
    alignItems: "center"
  },
  btnStyle: {
    backgroundColor: "#00a680"
  },
  btnContainer: {
    width: "70%"
  }
});