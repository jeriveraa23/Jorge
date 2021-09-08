import Predio from './../Pages/Predio';
import Construccion from './../Pages/Construccion';
import Terreno from './../Pages/Terreno';
import Index from './../../CRUD/Pages/index';
import PropietarioN from './../Pages/PropietarioN';
import PropietarioJ from './../Pages/PropietarioJ';
import Link from 'next/link' 



const Navigation=()=>{

  {}
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/">
          <a className="navbar-brand" href="#">Home</a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-3">
            <li className="nav-item">
                  <Link href="/Predio">
                  <a className="nav-link" >Predio</a>
                  </Link>
                
              </li>
             
              <li className="nav-item">
                <Link href="/Construccion">
                <a className="nav-link" >Construccion</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/Terreno">
                <a className="nav-link" >Terreno</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/PropietarioN">
                <a className="nav-link" >Propietario normal</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/PropietarioJ">
                <a className="nav-link" >Propietario jurídico</a>
                </Link>
              </li>

              
              
            
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default Navigation 