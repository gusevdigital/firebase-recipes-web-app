import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDJPq0hR83TB3ynvbiBfAH49Xb_5hyOLLE',
    authDomain: 'fir-recipes-85678.firebaseapp.com',
    projectId: 'fir-recipes-85678',
    storageBucket: 'fir-recipes-85678.appspot.com',
    messagingSenderId: '405827406035',
    appId: '1:405827406035:web:82f273bca0624d8ed42c26',
    measurementId: 'G-B7VMG71DFP',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
