import express from 'express';
import cors  from 'cors';
import mysql from 'mysql';

const server = express();

server.use(express.json());
server.use(cors());

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    port:"3307",
    password:"usbw",
    database:"fulleletro"
});



server.get("/usuarios",(req,res)=>{
    connection.query("select * from produtos",(error,result)=>{
        if(error){
            res.send(error)
        }else{
            res.send(result);
        }
    });  
});


server.get("/comentarios",(req,res)=>{
    connection.query("select * from comentarios",(error,result)=>{
        if(error){
            res.send(error)
        }else{
            res.send(result);
        }
    }); 
}); 


server.get("/register-comment",(req,res)=>{
    const {nome,email,msg}=req.body;
    connection.query(`insert into comentarios(nome,email,msg)values('${nome}','${email}','${msg}')`,(error,result)=>{
        if(error){
            res.send("Error ao Inseri no banco dado")
        }else{
            res.send("Inserido com sucesso");
        }
    }); 
}); 

server.listen(4444);