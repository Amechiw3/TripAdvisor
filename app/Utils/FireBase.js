import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCumvsF0RsW2W5oMDjRYbk6x-BHAvIPzI4",
    authDomain: "tripadvisor-984f6.firebaseapp.com",
    databaseURL: "https://tripadvisor-984f6.firebaseio.com",
    projectId: "tripadvisor-984f6",
    storageBucket: "tripadvisor-984f6.appspot.com",
    messagingSenderId: "543959029769",
    appId: "1:543959029769:web:8c05e882b05d445aa3c0d8"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);