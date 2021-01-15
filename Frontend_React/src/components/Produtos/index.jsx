import React from 'react';

import './styles.css';

const Produtos = () => {
    const [produto, setProduto] = React.useState([])

    React.useEffect(() => {
        async function fetchData() {
            //const url = "http://localhost/fullstack_eletro/src/backend/prod.php";
            //const url = "http://localhost:8080/backend/prod.php";
            const url="http://localhost:4444/usuarios";
            const response = await fetch(url)
            setProduto(await response.json())
        } fetchData();
    }, [])

    const cat = produto.map(cat => {
        const container = {}
        container['id'] = cat.id_categoria
        container['name'] = cat.categoria
        return container
    })

    const categoriaFinal = cat.map(JSON.stringify)
    .reverse()
    .filter(function(item, index, arr){
        return arr.indexOf(item, index +1) === -1
    }).reverse()
    .map(JSON.parse)

    const destaque = (event) => {
        if (event.target.style.width === "260px") {
            event.target.style.width = "120px";
        }
        else {
            event.target.style.width = "260px";
        }
    }

    const redimensiona = (event) => {
        if (event.target.style.width === "120px") {
            event.target.style.width = "260px";
        }
        else {
            event.target.style.width = "120px";
        }
    }

    let produt = document.getElementsByClassName('prod');

    const exibir = (event) => {
        let item = event.target.id;
        for (let i = 0; i < produt.length; i++) {
            if (item === produt[i].id) {
                produt[i].style.display = "inline-block";
            } else {
                produt[i].style.display = "none";
            }
        }
    }

    const exibirTodos = () => {
        for (let i = 0; i < produt.length; i++) {
            produt[i].style.display = "inline-block";
        }
    }

    return (
        <>
            <div className="container-fluid mt-5 row">
                {/* Parte de categoria */}
                <aside className="col-lg-3 col-sm-3">
                    <p className="paragrafoCateg"> Categorias </p>
                    <br />
                    <ul className="lista navbar-nav ml-auto">
                        <li className="nav-item" onClick={exibirTodos}> <b> Todos </b> </li>

                        {categoriaFinal.map(categoria => {
                            return (
                                <li key={categoria.id} id={categoria.id} className="nav-item" onClick={exibir}> {categoria.name} </li>
                            )
                        })}
                    </ul>
                </aside>

                {/* Parte de produtos */}

                <div className="col-lg-9 col-sm-9">
                    <div className="row">
                        {produto.map(element => {
                            return (
                                <div key={element.id_produto} className="prod card border-0 col-lg-3 col-sm-3" id={element.id_categoria} >
                                    <img id="imgProd" className="tamanhoprod border-0 img-thumbnail" alt={""} src={'/img/' + element.imagem} onMouseOver={destaque}
                                        onMouseOut={redimensiona} />
                                    <br />
                                    <p className="card-text"> {element.descricao_produto + " " + element.marca} </p>
                                    <br />
                                    <p className="strike"> R$ {element.preco_real}  </p>
                                    <br />
                                    <p className="preco"> R$ {element.preco_desc}  </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <hr />
            </div>
            <hr />
        </>
    );
}

export default Produtos;
