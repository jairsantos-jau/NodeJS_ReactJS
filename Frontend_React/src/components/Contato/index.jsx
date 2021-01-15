import React from 'react';

import './styles.css';

const Contato = () => {
    const [comentario, setComentario] = React.useState([])
    const [render, setRender] = React.useState(false);
    const [msg, setMsg] = React.useState(false)

    React.useEffect(() => {
        async function fetchData(){
        const url = "http://localhost:4444/comentarios";
        //const url = "http://localhost:8080/backend/coment.php";

        const response = await fetch(url);
        setComentario(await response.json());
        }
        fetchData();
    }, [render])

    function registerCommment(event) {
        event.preventDefault();
        const url = "http://localhost:4444/register-comment";
        //ou
        // const url = "http://localhost/fullstack_eletro/src/backend/register-comment.php";


        fetch(url, {
            method: "POST",
            body: new FormData(event.target)
        }).then((response) => response.json())
            .then((dados) => {
                setRender(!render);
                setMsg(dados);
                setTimeout(() => {
                    setMsg(false)
                }, 3000);
            })
    }

    return (
        <>
            <div className="container-fluid">
                <br /> <br />

                <p id="faleConos"> Fale Conosco </p>

                <div className="lojas text-center my-0">

                    <img src="./img/whats.png" alt="Logo WhatsApp" title="Imagem WhatsApp" id="logoContato" />
                                (11)
                                98887-9788 | | (11) 95293-5270
                    <img src="./img/email.png" alt="Logo Email" title="Imagem Email" id="logoContato" />
                                contato@fullstackeletro.com.br || vendas@fullstackeletro.com

                </div>

                <br /><br /><br />

                <form className="form-group" onSubmit={registerCommment}>

                    <h4 className="contato">
                        Nome Completo: <br />
                        <input id="fale_form" className="nome form-control" type="text" name="nome" placeholder="Digite aqui seu nome" />
                        <br /> Email:
                        <br />
                        <input id="fale_form" className="email form-control" type="email" name="email" placeholder="Digite aqui seu email" />
                        <br />
                    </h4>

                    <h4 className="mensagem">
                        Mensagem: <br />
                        <textarea id="text_form" className="textarea form-control" name="msg" placeholder="Digite sua mensagem aqui"></textarea> <br />

                        <input id="fale_botao" className="botao btn text-light" type="submit" value="Enviar" /> <br />
                    </h4>

                </form>

                {msg &&
                    <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
                         sucesso!
                    </div>
                }

                <div className="col">
                    {comentario.map(element => {
                        return (
                            <div key={element.id} className="card mt-5 shadow w-50">
                                <p> <b>Data: </b>{element.dia}</p> <br />
                                <p><b>Nome:</b> {element.nome} </p>
                                <p><b>Email:</b> {element.email} </p>
                                <p><b>Comentário:</b> {element.msg} </p>
                            </div>
                        )
                    })}
                </div>

                <br /> 
                <hr />
                <br /> 

            </div>

        </>

    );
}

export default Contato;