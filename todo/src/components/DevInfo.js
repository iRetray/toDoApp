import React from 'react'
import NavBar from './NavBar'
import nick from '../img/nickStyle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faFacebookSquare, faInstagramSquare }  from '@fortawesome/free-brands-svg-icons'

export default class DevInfo extends React.Component {
    render() {
        return(
            <div>
                <NavBar />
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <img src={nick} alt="" className="img-fluid"/>
                        </div>
                        <div className="col-9">
                            <p className="display-4">Retray</p>                            
                            <p className="lead">Desarrollador Web</p>
                            <hr></hr>
                            <p className="lead text-muted"><FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon> https://github.com/iRetray</p>
                            <p className="lead text-muted"><FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon> https://www.facebook.com/JRetray/</p>
                            <p className="lead text-muted"><FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon> https://www.instagram.com/le_retray/</p>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        )
    }
}