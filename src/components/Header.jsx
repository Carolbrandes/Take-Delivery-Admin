import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import TitleH1 from '../components/titles/TitleH1';
import Button from '../components/form/Button';

const Header = props => {
        return (
                <header className="main-header">
                        <TitleH1 texto={props.titulo} />

                        <Button className="btn main-header__btn-criar-ordem">
                                <FontAwesomeIcon className="main-header__btn-icone" icon={faPlus} />
                                Criar Ordem
                        </Button>
                </header>
        )
}

export default Header;