import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './ToDo';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const firebaseConfig = {
    apiKey: "AIzaSyAGZ0ow2ZidCd2mE0CXIuNPu3P_3Vyxwn8",
    authDomain: "todoreact-cbb4b.firebaseapp.com",
    databaseURL: "https://todoreact-cbb4b.firebaseio.com",
    projectId: "todoreact-cbb4b",
    storageBucket: "todoreact-cbb4b.appspot.com",
    messagingSenderId: "129372449365",
    appId: "1:129372449365:web:f02cc207506dea506b82dc"
  };

ReactDOM.render(<ToDo />, document.getElementById('app'));

