import React from 'react'
import e404 from '../img/404.jpg'
import NavBarCollapse from './NavBarCollapse'

export default class NotFound extends React.Component {
    render() {
        return(
            <div>
                <NavBarCollapse />
                <div className="container">
                    <img src={e404} alt="" className="img-fluid mx-auto d-block "/>
                </div>                
            </div>
        )
    }
}