import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-menu.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faAlignJustify, faUserFriends, faCog } from '@fortawesome/free-solid-svg-icons';
import Usuario from './Usuario';

const Menu = props => {
        return (
                <nav className="menu">
                        <div className="menu__bg01">
                                <img className="menu__logo" src={logo} alt="T&D" />
                                <FontAwesomeIcon className="menu__icone" icon={faTachometerAlt} />
                        </div>

                        <div className="menu__bg02">

                                <Link to="/ordem-de-servico">
                                        <div className="menu__div-icone">
                                                <FontAwesomeIcon className="menu__icone" icon={faAlignJustify} />
                                        </div>
                                </Link>


                                <div className="menu__div-icone">
                                        <FontAwesomeIcon className="menu__icone" icon={faUserFriends} />
                                </div>

                                <div className="menu__div-icone">
                                        <FontAwesomeIcon className="menu__icone" icon={faCog} />
                                </div>

                                <div className="menu__usuario">
                                        <Usuario />
                                </div>
                        </div>
                </nav>
        )
}

export default Menu;