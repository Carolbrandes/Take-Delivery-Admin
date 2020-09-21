import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import TitleH2 from '../components/titles/TitleH2';
import TitleH3 from '../components/titles/TitleH3';
import CardBox from '../components/CardBox';
import GraficoPizza from '../components/graficos/GraficoPizza';
import GraficoBarra from '../components/graficos/GraficoBarra';
import Select from '../components/form/Select';
import Footer from '../components/Footer';
import moeda from '../assets/moeda-td.PNG';
import Header from '../components/Header';


const PainelPrincipal = props => {
        return (
                <div className="painel-principal conteudo">
                        <Menu />

                        <main className="main">

                                <Header titulo="T&D Painel Principal" />

                                <section className="painel-principal__graficos">
                                        <CardBox className="cardBox" width="285px">
                                                <TitleH2 texto="Comparação de OS.s" />
                                                <TitleH3 texto="Relação Atual" />

                                                <div className="painel-principal__graficoPizza">
                                                        <GraficoPizza />
                                                </div>
                                        </CardBox>

                                        <div className="painel-principal__container-grafico02">
                                                <CardBox className="cardBox" bgColor="#FF9F53" height="88px" mr="25px" color="#fff" padding="0px">
                                                        <div className="painel-principal__container-card">
                                                                <div>
                                                                        <TitleH2 texto="TD$ 4503" />
                                                                        <TitleH3 texto="Em créditos TakeCoin" />
                                                                </div>

                                                                <img src={moeda} alt="#" />
                                                        </div>
                                                </CardBox>

                                                <CardBox className="cardBox" height="88px" mr="25px" padding="0px" >
                                                        <div className="painel-principal__container-card">
                                                                <div>
                                                                        <TitleH2 texto="3,2 dias" />
                                                                        <TitleH3 texto="Tempo Médio de Conclusão" />
                                                                </div>
                                                        </div>
                                                </CardBox>

                                                <CardBox className="cardBox" height="88px" padding="0px">
                                                        <div className="painel-principal__container-card">
                                                                <div>
                                                                        <TitleH2 texto="TBD" />
                                                                        <TitleH3 texto="Rentabilidade Custo/Médio" />
                                                                </div>
                                                        </div>
                                                </CardBox>

                                                <CardBox className="cardBox painel-principal__grafico02" width="820px">

                                                        <header className="painel-principal__grafico02-header">
                                                                <TitleH2 texto="Relação OS/Mês" />

                                                                <nav className="painel-principal__grafico02-nav">
                                                                        <a href="#">Mensal</a>
                                                                        <a href="#">Semanal</a>
                                                                        <a href="#">Diário</a>
                                                                </nav>
                                                        </header>

                                                        <div className="painel-principal__filtro-perido">
                                                                <TitleH3 texto="Período de" />
                                                                <Select>
                                                                        <option value="">Jan/Dez 2020</option>
                                                                </Select>
                                                        </div>
                                                        <GraficoBarra />
                                                </CardBox>
                                        </div>
                                </section>
                        </main>
                        <Footer />
                </div>
        )
}

export default PainelPrincipal;