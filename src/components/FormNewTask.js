import React from 'react'
import { Form, FormGroup, Label, Input, Button  } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faSpellCheck, faKeyboard } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import '@sweetalert2/themes/dark/dark.css'


export default class FormNewTask extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            tittle: "",
            description: ""
        }
        this.tittleChange = this.tittleChange.bind(this);
        this.descriptionChange = this.descriptionChange.bind(this);
        this.darAlerta = this.darAlerta.bind(this)
        this.camposVacios = this.camposVacios.bind(this)
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        if(!this.state.tittle | !this.state.tittle){
            this.camposVacios()
        } else {
            this.añadirTarea(this.state.tittle, this.state.description)
        }        
    }

    añadirTarea(tittle, description) {
        const dataList = JSON.parse(localStorage.getItem("listaTareas"))
        console.log(dataList)
        const newTask = {
            id: dataList.length,
            tittle: tittle,
            description: description,
            state: 'pendiente'
        }
        dataList.push(newTask)
        console.log(dataList)
        localStorage.setItem("listaTareas", JSON.stringify(dataList))
        this.setState({
            tittle: "",
            description: ""
        })
        this.darAlerta()
    }

    camposVacios() {
        Swal.fire({
            icon: 'error',
            title: 'Upss',
            text: 'Completa ambos campos antes de añadir una nueva tarea',
            confirmButtonText:'Entiendo',
            showCloseButton: true
          })
    }

    darAlerta() {
        Swal.fire({
            icon: 'success',
            title: 'Tarea Añadida',
            text: 'Ahora tu nueva tarea estará disponible en tu lista personal',
            confirmButtonText:'Genial',
            showCloseButton: true
          })
    }

    tittleChange(event) {     
        this.setState({tittle: event.target.value});
        this.props.actualizarTittle(this.state.tittle);      
    }

    descriptionChange(event) {
        this.setState({description: event.target.value});
        this.props.actualizarDescription(this.state.description)
    }

    render() {
        return(
            <div>
                <Form onSubmit={this.onFormSubmit}>
                    <h3>Creación de nueva tarea</h3>
                    <hr></hr>
                    <FormGroup>
                        <Label for="tittle"><FontAwesomeIcon icon={faSpellCheck}></FontAwesomeIcon><strong> Título de la tarea</strong></Label>
                        <Input type="text" name="tittle" id="tittle" placeholder="Cocinar la comida para la cena familiar" value={this.state.tittle} onChange={this.tittleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description"><FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon><strong> Descripción de la tarea</strong></Label>
                        <Input type="textarea" value={this.state.description} onChange={this.descriptionChange} name="description" id="description" placeholder="Comprar vegetales y carne, arreglar la mesa y llamar a los invitados."/>
                    </FormGroup>
                    <center><Button color="primary" type="submit"><FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon> Añadir tarea</Button></center>
                </Form>
            </div>
        )
    }
}