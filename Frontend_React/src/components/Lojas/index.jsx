import React from 'react';

import './styles.css';

const Lojas = () => {
    return (
        <>
            <div className="container-fluid">
                <br /> <br />
                <p className="nossasLojas">Nossas Lojas</p>
                <br /> <br />
                <div className="lojas text-center my-0 row">
                    
                    
                    <div className="col-lg-4 col-sm-12">
                        <h3> Bahia </h3> <br />
                        <p> bahianinha, 0000, Bahia - BA </p>
                        <p> baris - Cep: 000-0601 </p>
                        <p> (xx) 2134-8888 </p>
                    </div>

                    <div className="col-lg-4 col-sm-12">
                        <h3> São Pedro </h3> <br />
                        <p>Rua GTA , 123, São Pedro - SP</p>
                        <p> Consolino - Cep: 213-32010 </p>
                        <p> (xx) 5432-0990 </p>
                    </div>

                    <div className="col-lg-4 col-sm-12">
                        <h3> São Paulo </h3> <br />
                        <p> Rua do dinheiro, 1000, São Paulo - SP </p>
                        <p> AV.Paulista - Cep: 100-20032 </p>
                        <p> (11) 3399-0011 </p>
                    </div>

                </div>
                <br /> 
                <hr />
                <br /> 
            </div>

        </>
    );
}

export default Lojas;
