import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Icon, Button, Overlay, h2 } from 'react-native-elements';
import FireBase from 'firebase';

import { validateEmail } from '../../Utils/validation';


export default function RegisterForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [hideRepetPassword, setHideRepetPassword] = useState(true);
  const [hasErrorEmail, setErrorEmail] = useState(false);

  const inputEmail = React.createRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetPassword, setRepetPassword] = useState("");

  const register = () => {
    if(!email || !password || !repetPassword) {
      setIsVisible(true);
    } else {
      if(!validateEmail(email)) {
        inputEmail.current.focus();
      } else {
        if(password !== repetPassword) {

        } else {

        }
      }
    }
  }
  return (
    <View 
      style={styles.formContainer}
      behavier="padding"
      enabled
      >
      <Overlay
        isVisible={isVisible}
        windowBackgroundColor="rgba(0,0,0, .5)"
        overlayBackgroundColor="transparent"
        overlayStyle={styles.overlay}
        onBackdropPress={() => setIsVisible(false)}
      >
        <View style={styles.overlayView}>
          <Text h2>Todos los campos son obligatorios</Text>
        </View>
      </Overlay>
      <Input 
        ref={inputEmail}
        label="Correo Electronico"
        placeholder="Correo"
        containerStyle={styles.inputForm}
        onChange={e => setEmail(e.nativeEvent.text)}
        onEndEditing={e => setErrorEmail(!validateEmail(e.nativeEvent.text))}
        errorStyle={{ color: 'red' }}
        errorMessage={hasErrorEmail ? 'Please enter a valid email addres' : ''}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input 
        label="Contraseña"
        placeholder="Contraseña"
        password={true}
        secureTextEntry={hidePassword}
        containerStyle={styles.inputForm}
        onChange={e => setPassword(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={hidePassword ? styles.iconRight : styles.iconRightActive}
            onPress={() => setHidePassword(!hidePassword)}
          />
        }
      />
      <Input 
        label="Repetir Contraseña"
        placeholder="Repetir Contraseña"
        password={true}
        secureTextEntry={hideRepetPassword}
        containerStyle={styles.inputForm}
        onChange={e => setRepetPassword(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name={hideRepetPassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={hideRepetPassword ? styles.iconRight : styles.iconRightActive}
            onPress={() => setHideRepetPassword(!hideRepetPassword)}
          />
        }
      />
      <Button
        title="Unirse"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
        onPress={register}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    height: 100,
    width: 300,
    backgroundColor: "#fff",
    borderColor: "#00a680",
    borderWidth: 2,
    borderRadius: 10
  },
  overlayView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  inputForm: {
    width: "100%",
    marginTop: 20
  },
  iconRight: {
    color: "#c1c1c1"
  },
  iconRightActive: {
    color: "#00a680"
  },
  btnContainerRegister: {
    marginTop: 20,
    width: "95%"
  },
  btnRegister: {
    backgroundColor: "#00a680"
  }
})