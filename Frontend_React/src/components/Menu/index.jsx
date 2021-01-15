import React from 'react';
import './styles.css';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Produtos from '../Produtos';
import Lojas from '../Lojas';
import Contato from '../Contato';

const Menu = () => {
    return (
        <>
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                    <Link className="navbar-brand" to="/">
                        <img src="./img/logo.png" alt="logo FullStack" title="Página Inicial" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                        <span className="navbar-toggler-icon "></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" title="Página de produtos" to="/Produtos">Produtos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" title="Nossas lojas" to="/Lojas">Nossas Lojas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" title="Fale conosco" to="/Contato">Contato</Link>
                            </li>
                        </ul>

                        <form className="form-inline ml-5 my-2 my-lg-4" id="pesquisa">
                            <input className="form-control mr-sm-0" type="search" placeholder="Pesquisar" aria-label="Pesquisar" />
                            <button className="botao-nav btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
                        </form>

                    </div>
                </nav>
                <Switch>
                    <Route path="/" exact component={ Home } />
                    <Route path="/Produtos" component={ Produtos } />
                    <Route path="/Lojas" component={ Lojas } />
                    <Route path="/Contato" component={ Contato } />
                    <Route component={() => <div><h1>Page 404!</h1></div>} />
                </Switch>
            </BrowserRouter>
        </>

    );
}

export default Menu;