import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ListHome from './components/ListHome'
import AddTask from './components/AddTask'
import DevInfo from './components/DevInfo'
import NotFound from './components/NotFound'

export default class ToDo extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/home" component={ ListHome }/>
                    <Route exact path="/home/add" component={ AddTask }/>
                    <Route exact path="/home/dev" component={ DevInfo }/>
                    <Route component={ NotFound }/>
                </Switch>
            </BrowserRouter>
        )
    }
}