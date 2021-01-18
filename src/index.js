import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebaseConfig = {
  apiKey: "AIzaSyCVa6EFTCQGbaP1Y8y5Av4skJFLADjp1g0",
  authDomain: "members-only-proj.firebaseapp.com",
  projectId: "members-only-proj",
  storageBucket: "members-only-proj.appspot.com",
  messagingSenderId: "322912595773",
  appId: "1:322912595773:web:0f64f47f6750ab90d21f54"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
