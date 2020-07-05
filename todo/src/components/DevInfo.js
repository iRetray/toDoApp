import React from 'react'
import NavBar from './NavBar'

export default class DevInfo extends React.Component {
    render() {
        return(
            <div>
                <NavBar />
                <h1>Informacion del developer</h1>
                Iconos diseñados por <a href="https://www.flaticon.es/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon"> www.flaticon.es</a>
                <a href='https://www.freepik.es/fotos-vectores-gratis/negocios'>Vector de Negocios creado por katemangostar - www.freepik.es</a>
            </div>
        )
    }
}