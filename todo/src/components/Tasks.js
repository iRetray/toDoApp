import React from 'react'
import NavBar from './NavBar'
import Task from './Task'
import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAGZ0ow2ZidCd2mE0CXIuNPu3P_3Vyxwn8",
    authDomain: "todoreact-cbb4b.firebaseapp.com",
    databaseURL: "https://todoreact-cbb4b.firebaseio.com",
    projectId: "todoreact-cbb4b",
    storageBucket: "todoreact-cbb4b.appspot.com",
    messagingSenderId: "129372449365",
    appId: "1:129372449365:web:f02cc207506dea506b82dc"
  };
firebase.initializeApp(firebaseConfig)



export default class Tasks extends React.Component {

    constructor() {
        super()
        this.state = {
            tittle: '',
            description: ''
        }
        const tittle = firebase.database().ref().child('tareas').child('0').child('tittle');
        tittle.on('value', snapshot => {
            this.setState({
                tittle: snapshot.val()
            })
        })
        const description = firebase.database().ref().child('tareas').child('0').child('description');
        description.on('value', snapshot => {
            this.setState({
                description: snapshot.val()
            })
        })
    }

    

    render() {
        return(
            <div>
                <NavBar />
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                        <h1>{this.state.name}</h1>
                        <Task tittle={this.state.tittle} description={this.state.description} done={true}/>
                        </div>                   
                    </div>                    
                </div> 
            </div>
        )
    }
}