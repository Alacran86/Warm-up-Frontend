import React from 'react'
import { BrowserRouter as Router,
  Route,
  Link,
  Switch

} from 'react-router-dom'
import Posts from './components/Posts'
import Post from './components/Post'
import FormularioCreacion from './components/FormularioCreacion'
import FormularioEdicion from './components/FormularioEdicion'





function App() {



/* Crear componentes para los formularios 
--Formulario de creación---
Deberá mostrar un formulario que permita crear un nuevo post.
El formulario deberá contener los campos título y contenido, y realizar la validación de los mismos (ambos son obligatorios). Al hacer el submit, debe realizarse la petición al endpoint correspondiente.
--Formulario de Edición--
Deberá recibir el identificador de un post y mostrar un formulario que permita editarlo. En el caso de que no exista, mostrar un mensaje de error. El formulario deberá contener los campos título y contenido, y realizar la validación de los mismos (ambos son obligatorios). Al hacer el submit, debe realizarse la petición al endpoint correspondiente.
*/

  return (
      <Router>
        <div className="container">
          <div className="container-group">
        <Link to="/">Home</Link>
        <Link to="/">FormularioCreacion</Link>
        <Link to="/">FormularioEdicion</Link>
        </div>
        </div>
      <Switch>
        <Route path="/">
          <Posts/>
        </Route>
        <Route path="/posts/:id">
          <Post/>
        </Route>
      </Switch>

      </Router>

  );
}

export default App;
