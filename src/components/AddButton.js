import React from 'react'
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default class AddTask extends React.Component {
    render() {
        return(
                <div className="row justify-content-center">
                    <div className="col-4">
                    </div> 
                    <div className="col-4">
                        <Link to="/home/add" style={{textDecoration: 'none'}}>                        
                            <Button outline color="primary" size="md" block><FontAwesomeIcon icon={ faCalendarPlus } /> Añadir tarea</Button>
                        </Link>
                    </div>
                    <div className="col-4">
                    </div>                                 
                </div>
        )
    }
}