import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import { View, Text } from 'react-native';

import Loading from "../../components/Loading";
import UserLogged from './UserLogged';
import UserGuest from './UserGuest';


export default function MyAccount() {
  const [login, setLogin] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
			!user ? setLogin(false) : setLogin(true);
    })
	}, []);
	//return <Loading isVisible={true} text="Cargando..."/>
	
  if(login === null) {
    return <Loading isVisible={true} text="Cargando..."/>
    
	}
	
	return login ? <UserLogged/> : <UserGuest/>;
}