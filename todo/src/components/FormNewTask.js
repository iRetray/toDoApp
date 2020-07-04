import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faSpellCheck, faKeyboard } from '@fortawesome/free-solid-svg-icons'

export default class FormNewTask extends React.Component{
    render() {
        return(
            <div>
                <Form>
                    <h3>Creación de nueva tarea</h3>
                    <hr></hr>
                    <FormGroup>
                        <Label for="tittle"><FontAwesomeIcon icon={faSpellCheck}></FontAwesomeIcon><strong> Título de la tarea</strong></Label>
                        <Input type="text" name="tittle" id="tittle" placeholder="Cocinar la cena para la cena familiar" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description"><FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon><strong> Descripción de la tarea</strong></Label>
                        <Input type="textarea" name="description" id="description" placeholder="Comprar vegetales y carne, arreglar la mesa y llamar a los invitados."/>
                    </FormGroup>
                    <center><Button color="primary"><FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon> Añadir tarea</Button></center>
                </Form>
            </div>
        )
    }
}