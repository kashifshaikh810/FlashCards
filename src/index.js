import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export const DB_CONFIG = {
    apiKey: "AIzaSyA8nE0C91FZO5qVxZRbbA0KGo_0Y1cGuwo",
    authDomain: "react-flashcards-987cf.firebaseapp.com",
    databaseURL: "https://react-flashcards-987cf.firebaseio.com",
    projectId: "react-flashcards-987cf",
    storageBucket: "",
    messagingSenderId: "281039604562",
    appId: "1:281039604562:web:ae38ef9825d1f1c5"

}


firebase.initializeApp(DB_CONFIG);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
