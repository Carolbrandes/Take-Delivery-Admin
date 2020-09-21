import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import PainelPrincipal from './pages/PainelPrincipal';
import OrdemDeServico from './pages/OrdemDeServico';

// o exact serve para ele fazer uma verificação de igualdade, ele vai ver se a url do browser é igual ao path

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={PainelPrincipal} path="/painel-principal" exact />
            <Route component={ OrdemDeServico} path="/ordem-de-servico" exact />
        </BrowserRouter>
    )
}

export default Routes;
