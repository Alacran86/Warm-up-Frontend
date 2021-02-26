import React from 'react'
import {Link} from 'react-router-dom'

const BarraNavegacion = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           <div className="container">
           <Link className="navbard-brand" to="/">Home</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                    <Link className="nav-link" to="/create">Crear Nuevo Post</Link>
                    </li>
                    <li class="nav-item">
                    <Link className="nav-link" to="/edit">Editar Post</Link>
                    </li>
                    
                </ul>
            </div>
           </div>
        </nav>
    )
}

export default BarraNavegacion