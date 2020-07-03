import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'

export default class FormNewTask extends React.Component{
    render() {
        return(
            <div>
                <Form>
                    <FormGroup>
                        <Label for="tittle">Título de la tarea</Label>
                        <Input type="text" name="tittle" id="tittle" placeholder="Cocinar la cena para la cena familiar" />
                    </FormGroup>
                </Form>
            </div>
        )
    }
}