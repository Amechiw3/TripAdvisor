import React from 'react'
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import { withNavigation } from 'react-navigation'

export default function Login(props) {
  const { navigation } = props;
  return (
    <ScrollView>
      <Image 
        source={require("../../../assets/img/original.png")}
        style={styles.logo} 
        resizeMode="contain"
      />
      <View style={styles.viewContainer}>
        <Text>Form login</Text>
        
        <CreateAccount navigation={navigation}/>
        
      </View>
      <Divider style={styles.divider}></Divider>
      <View style={styles.viewContainer}>
        <Button title="Login Facebook"/>
      </View>
    </ScrollView>
  )
}

function CreateAccount(props) {
  const { navigation } = props;
  return (
      <Text style={styles.textRegister}>
        ¿Aún no tienes una cuenta?{" "}
        <Text style={styles.btnRegister}
          onPress={() => navigation.navigate("Register")}>Registrate aquí</Text>
      </Text>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20
  },
  viewContainer: {
    marginLeft: 40,
    marginRight: 40
  },
  textRegister: {
    textAlign: "center",
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10
  },
  btnRegister: {
    color:"#00a680",
    fontWeight: "bold"
  },
  divider: {
    backgroundColor: "#00a680",
    margin: 40
  }
});