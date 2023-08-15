import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBxnhEacQcZkJHG7iz0BbW1RWryONe_780",
    authDomain: "chapter09-90c07.firebaseapp.com",
    projectId: "chapter09-90c07",
    storageBucket: "chapter09-90c07.appspot.com",
    messagingSenderId: "688727815220",
    appId: "1:688727815220:web:e1d61ee0aad228724d8661",
    measurementId: "G-XZ4VEVW300"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
