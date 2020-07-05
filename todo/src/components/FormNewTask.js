import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faSpellCheck, faKeyboard } from '@fortawesome/free-solid-svg-icons'

export default class FormNewTask extends React.Component{

    state = {
        tittle: "",
        description: ""
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        this.obtenerDatos()
        this.añadirTarea(this.state.tittle, this.state.description)
    }

    añadirTarea(tittle, description) {
        console.log(tittle, description)
        let dataList = localStorage.getItem("listaTareas")
        console.log(dataList)
        const newTask = {
            id: dataList.length,
            tittle: tittle,
            description: description,
            state: 'pendiente'
        }
        /*
        let newListTask = JSON.stringify(dataList.push(newTask))
        localStorage.setItem("listaTareas", newListTask)
        console.log("Tarea insertada")
        console.log(JSON.parse(localStorage.getItem("listaTareas"))) */
    }

    obtenerDatos = (e) => {
        this.setState({tittle: this.tittleInputValue.value})
        this.setState({description: this.descriptionInputValue.value})
    }

    render() {
        return(
            <div>
                <Form onSubmit={this.onFormSubmit}>
                    <h3>Creación de nueva tarea</h3>
                    <hr></hr>
                    <FormGroup>
                        <Label for="tittle"><FontAwesomeIcon icon={faSpellCheck}></FontAwesomeIcon><strong> Título de la tarea</strong></Label>
                        <Input innerRef={(node) => this.tittleInputValue = node} type="text" name="tittle" id="tittle" placeholder="Cocinar la comida para la cena familiar"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description"><FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon><strong> Descripción de la tarea</strong></Label>
                        <Input innerRef={(node) => this.descriptionInputValue = node} type="textarea" name="description" id="description" placeholder="Comprar vegetales y carne, arreglar la mesa y llamar a los invitados."/>
                    </FormGroup>
                    <center><Button color="primary" type="submit"><FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon> Añadir tarea</Button></center>
                </Form>
            </div>
        )
    }
}