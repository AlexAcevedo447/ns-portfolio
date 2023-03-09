import logo from '../../assets/ninja-logo.png';
import { Link } from 'react-router-dom';
import { Hexagon } from './Hexagon';
import '../../assets/styles/Header.css'
export function Header() {
    return (
        <header className='head-content'>
            <div className="head-content__info">
                <div className="logo">
                    <figure className='img-container'>
                        <img src={logo} alt="KaliLogo" className='img' />
                    </figure>
                </div>
                <h1 className='head-content__title'>Ninja-Scripter</h1>
                <h3 className='head-content__subtitle'>Portafolio Creativo</h3>
            </div>
            <div className="action">
                <div className="button">
                    <Link>
                        Proyectos
                    </Link>
                </div>
            </div>
            {/* <Hexagon></Hexagon> */}
        </header>
    )
}