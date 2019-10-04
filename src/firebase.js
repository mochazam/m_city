import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyDPY3mwcgbBl1woQzACte1tfMLu0OudeNU",
    authDomain: "m-city-512ef.firebaseapp.com",
    databaseURL: "https://m-city-512ef.firebaseio.com",
    projectId: "m-city-512ef",
    storageBucket: "m-city-512ef.appspot.com",
    messagingSenderId: "45660561612"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseDB,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers
}