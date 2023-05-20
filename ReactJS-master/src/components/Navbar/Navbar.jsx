import './Navbar.scss'
import logo from '../../assets/digital.svg'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import Buscador from '../../etx/Buscador'

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                
                <img className='imgLogo' src={logo} alt='LOGO'/>

                <nav className="navbar">
                    <Link to='/' className="navbar__link">Inicio</Link>
                    <Link to='/productos/Equipos' className="navbar__link">Equipos</Link>
                    <Link to='/productos/Atomizadores' className="navbar__link">Atomizadores</Link>
                    <Link to='/productos/Liquidos' className="navbar__link">Liquidos</Link>
                    <Link to='/productos/Resistencias' className="navbar__link">Resistencias</Link>
                    <Link to='/productos/Accesorios' className="navbar__link">Accesorios</Link>
                    <Link to='/nosotros' className="navbar__link">Nosotros</Link>
                    
                    <Buscador />
                </nav>
                <CartWidget />
            </div>

           
        </header>
    )
}


