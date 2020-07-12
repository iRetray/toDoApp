import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import AddTask from './components/AddTask'
import DevInfo from './components/DevInfo'
import NotFound from './components/NotFound'
import Tasks from './components/Tasks'

export default class ToDo extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ Home }/>
                    <Route exact path="/home" component={ Home }/>
                    <Route exact path="/home/tasks" component={ Tasks }/>
                    <Route exact path="/home/add" component={ AddTask }/>
                    <Route exact path="/home/dev" component={ DevInfo }/>
                    <Route component={ NotFound }/>
                </Switch>
            </BrowserRouter>
        )
    }
}