import React from 'react'
import NavBarCollapse from './NavBarCollapse'
import nick from '../img/nickStyle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faFacebookSquare, faInstagramSquare }  from '@fortawesome/free-brands-svg-icons'

export default class DevInfo extends React.Component {
    render() {
        return(
            <div>
                <NavBarCollapse />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <img src={nick} alt="" className="img-fluid"/>
                        </div>
                        <div className="col-sm-9">
                            <p className="display-4">Retray</p>                            
                            <p className="lead">Desarrollador Web</p>
                            <hr></hr>
                            <p className="lead text-muted">
                                <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon> https://github.com/iRetray <br />
                                <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon> https://www.facebook.com/JRetray/ <br />
                                <FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon> https://www.instagram.com/le_retray/
                            </p>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        )
    }
}