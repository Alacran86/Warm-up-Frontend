/*Formulario de Edición
Deberá recibir el identificador de un post y mostrar un formulario que permita editarlo. En el caso de que no exista, mostrar un mensaje de error. El formulario deberá contener los campos título y contenido, y realizar la validación de los mismos (ambos son obligatorios). Al hacer el submit, debe realizarse la petición al endpoint correspondiente.
 */

 
import React, {useState} from 'react'
 
 const FormularioEdicion = () => {
     
    const [titulo, setTitulo] = useState('')
    const [contenido, setContenido] = useState('')
     
    
    
    const Validar = (event) =>{
        event.preventDefault()
        console.log('Pulsando el boton')
    
    if(!titulo.trim()){
        console.log('El campo Titulo esta vacio')
        return
    }
    if(!contenido.trim()){
        console.log('El campo Contenido esta vacio')
        return
     }
    
    }
    
    return (
        <div className="container mt-4">

                
        <form onSubmit={Validar} className="form-group">
            <input 
            placeholder="Introduce Titulo" 
            classname="form-control mb-3" 
            type="text"
            onChange={ (e) =>{setTitulo(e.target.value)} } 
            />
            
            <input 
            placeholder="Introduce Contenido" 
            classname="form-control mb-3" 
            type="text"
            onChange={ (e) =>{setContenido(e.target.value)} } 
            />
            
            <input 
            classname="btn btn-secondary btn-block mb-3" 
            type="submit"
            value="Crear Post"
            />

        </form>
    </div>
     )
 }
 
 export default FormularioEdicion
 
 