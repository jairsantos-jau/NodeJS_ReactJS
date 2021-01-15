import React from 'react';

import './styles.css';

const Footer = () => {
    return (
            <footer id="rodape">
                <h3 id="forma_pagamento">Formas de pagamento</h3>
                <img id="imgPag" src="./img/pagamento.png" alt="Formas de pagamento"
                    title="Mastercard, Visa, American Express, Diners Club, Hipercard, Elo" />    
                <br /> 
                <p className="direitos_autorais">2020&copy; Todos os Direitos Reservados</p>
            </footer>
    );
}

export default Footer;