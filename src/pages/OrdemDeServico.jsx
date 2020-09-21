import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import Header from '../components/Header';
import InputBusca from '../components/form/InputBusca';
import iconeEditar from '../assets/icone-editar.PNG';
import iconeMaisInfo from "../assets/icone-mais-informacoes.PNG";

const CriarOrdem = props => {
        return (
                <div className="ordens-de-pagamento conteudo">
                        <Menu />

                        <main className="main">
                                <Header titulo="Ordens de Serviço" />

                                <div className="ordens-de-pagamento__busca">
                                        <InputBusca />
                                        <a href="#">Pesquisa Avançada...</a>
                                </div>

                                <div className="table-container">
                                        <table>
                                                <thead>
                                                        <th>OS</th>
                                                        <th>Status</th>
                                                        <th>Cliente</th>
                                                        <th>Marca</th>
                                                        <th>Período de Abertura</th>
                                                        <th>Período de Encerramento</th>
                                                        <th>Ações</th>
                                                </thead>

                                                <tbody>
                                                        <tr>
                                                                <td>325</td>
                                                                <td className="status-ativo"><span className="icone-ativo"></span>Ativo</td>
                                                                <td>Érica</td>
                                                                <td>Samsung</td>
                                                                <td>21/01/2020 a 24/08/2020</td>
                                                                <td>21/01/2020 a 24/08/2020</td>
                                                                <td>
                                                                        <a className="tabela-icone" href="#">
                                                                                <img src={iconeEditar} alt="#" />
                                                                        </a>
                                                                        <a href="#">
                                                                                <img src={iconeMaisInfo} alt="#" />
                                                                        </a>
                                                                </td>

                                                        </tr>

                                                        <tr>
                                                                <td>325</td>
                                                                <td className="status-ativo"><span className="icone-ativo"></span>Ativo</td>
                                                                <td>Érica</td>
                                                                <td>Samsung</td>
                                                                <td>21/01/2020 a 24/08/2020</td>
                                                                <td>21/01/2020 a 24/08/2020</td>
                                                                <td>
                                                                        <a className="tabela-icone" href="#">
                                                                                <img src={iconeEditar} alt="#" />
                                                                        </a>
                                                                        <a href="#">
                                                                                <img src={iconeMaisInfo} alt="#" />
                                                                        </a>
                                                                </td>

                                                        </tr>

                                                        <tr>
                                                                <td>325</td>
                                                                <td className="status-ativo"><span className="icone-ativo"></span>Ativo</td>
                                                                <td>Érica</td>
                                                                <td>Samsung</td>
                                                                <td>21/01/2020 a 24/08/2020</td>
                                                                <td>21/01/2020 a 24/08/2020</td>
                                                                <td>
                                                                        <a className="tabela-icone" href="#">
                                                                                <img src={iconeEditar} alt="#" />
                                                                        </a>
                                                                        <a href="#">
                                                                                <img src={iconeMaisInfo} alt="#" />
                                                                        </a>
                                                                </td>

                                                        </tr>

                                                        <tr>
                                                                <td>325</td>
                                                                <td className="status-ativo"><span className="icone-ativo"></span>Ativo</td>
                                                                <td>Érica</td>
                                                                <td>Samsung</td>
                                                                <td>21/01/2020 a 24/08/2020</td>
                                                                <td>21/01/2020 a 24/08/2020</td>
                                                                <td>
                                                                        <a className="tabela-icone" href="#">
                                                                                <img src={iconeEditar} alt="#" />
                                                                        </a>
                                                                        <a href="#">
                                                                                <img src={iconeMaisInfo} alt="#" />
                                                                        </a>
                                                                </td>

                                                        </tr>

                                                        <tr>
                                                                <td>325</td>
                                                                <td className="status-ativo"><span className="icone-ativo"></span>Ativo</td>
                                                                <td>Érica</td>
                                                                <td>Samsung</td>
                                                                <td>21/01/2020 a 24/08/2020</td>
                                                                <td>21/01/2020 a 24/08/2020</td>
                                                                <td>
                                                                        <a className="tabela-icone" href="#">
                                                                                <img src={iconeEditar} alt="#" />
                                                                        </a>
                                                                        <a href="#">
                                                                                <img src={iconeMaisInfo} alt="#" />
                                                                        </a>
                                                                </td>

                                                        </tr>

                                                        <tr>
                                                                <td>325</td>
                                                                <td className="status-ativo"><span className="icone-ativo"></span>Ativo</td>
                                                                <td>Érica</td>
                                                                <td>Samsung</td>
                                                                <td>21/01/2020 a 24/08/2020</td>
                                                                <td>21/01/2020 a 24/08/2020</td>
                                                                <td>
                                                                        <a className="tabela-icone" href="#">
                                                                                <img src={iconeEditar} alt="#" />
                                                                        </a>
                                                                        <a href="#">
                                                                                <img src={iconeMaisInfo} alt="#" />
                                                                        </a>
                                                                </td>

                                                        </tr>

                                                        <tr>
                                                                <td>325</td>
                                                                <td className="status-ativo"><span className="icone-ativo"></span>Ativo</td>
                                                                <td>Érica</td>
                                                                <td>Samsung</td>
                                                                <td>21/01/2020 a 24/08/2020</td>
                                                                <td>21/01/2020 a 24/08/2020</td>
                                                                <td>
                                                                        <a className="tabela-icone" href="#">
                                                                                <img src={iconeEditar} alt="#" />
                                                                        </a>
                                                                        <a href="#">
                                                                                <img src={iconeMaisInfo} alt="#" />
                                                                        </a>
                                                                </td>
                                                        </tr>

                                                        <tr>
                                                                <td>325</td>
                                                                <td className="status-ativo"><span className="icone-ativo"></span>Ativo</td>
                                                                <td>Érica</td>
                                                                <td>Samsung</td>
                                                                <td>21/01/2020 a 24/08/2020</td>
                                                                <td>21/01/2020 a 24/08/2020</td>
                                                                <td>
                                                                        <a className="tabela-icone" href="#">
                                                                                <img src={iconeEditar} alt="#" />
                                                                        </a>
                                                                        <a href="#">
                                                                                <img src={iconeMaisInfo} alt="#" />
                                                                        </a>
                                                                </td>

                                                        </tr>
                                                        <tr>
                                                                <td>325</td>
                                                                <td className="status-ativo"><span className="icone-ativo"></span>Ativo</td>
                                                                <td>Érica</td>
                                                                <td>Samsung</td>
                                                                <td>21/01/2020 a 24/08/2020</td>
                                                                <td>21/01/2020 a 24/08/2020</td>
                                                                <td>
                                                                        <a className="tabela-icone" href="#">
                                                                                <img src={iconeEditar} alt="#" />
                                                                        </a>
                                                                        <a href="#">
                                                                                <img src={iconeMaisInfo} alt="#" />
                                                                        </a>
                                                                </td>

                                                        </tr>
                                                </tbody>
                                        </table>
                                </div>



                        </main>
                </div>
        )
}

export default CriarOrdem;