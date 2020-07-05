import React from 'react'
import NavBarCollapse from './NavBarCollapse'
import nick from '../img/nickStyle.png'
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebookSquare, faInstagram }  from '@fortawesome/free-brands-svg-icons'

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
                            <Button color="link" href="https://github.com/iRetray">
                                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> GitHub
                            </Button>
                            <Button color="link" href="https://www.facebook.com/JRetray/">
                                <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon> Facebook
                            </Button>
                            <Button color="link" href="https://www.instagram.com/le_retray/">
                                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> Instagram
                            </Button>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        )
    }
}