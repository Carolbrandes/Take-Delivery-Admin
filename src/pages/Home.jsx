import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import InputText from '../components/form/InputText';
import Button from '../components/form/Button';

const Home = props => {
        return (
                <div class="home">
                        <section className="home__card"></section>

                        <section className="home__login">
                                <div className="home__logo">
                                        <img src={logo} alt="Take & Delivery" />
                                </div>
                                <InputText id="usuario" label="Usuário" type="text" />
                                <InputText id="senha" label="Senha" type="password" />

                                <Link to="/painel-principal">
                                        <Button className="btn home__btn">Entrar</Button>
                                </Link>

                                <a className="home__esqueceu-senha" >Esqueceu a senha?</a>

                        </section>
                </div>
        )
}

export default Home;