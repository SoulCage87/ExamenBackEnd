import { db } from "../db/conn.js";

const getPersonaje = async (req, res) => {
 
    const sql = `SELECT a.nombre, a.descripcion,
    b.nombre as Actor, c.titulo as Titulo_de_Pelicula
    FROM Personaje a
    INNER JOIN Actor b on a.id_actor = b.id
    INNER JOIN pelicula_serie c on a.id_pelicula = c.id`;
    const result = await db.query(sql);
    res.json(result);
};

const postPersonaje = async (req,res) => {

    const {nombre, descripcion,edad,id_actor,id_pelicula, IMG} = req.body;
    const params = [nombre,descripcion,edad,id_actor,id_pelicula, IMG];
 
    const sql = `INSERT INTO Personaje
                 (nombre,descripcion,edad,id_actor,id_pelicula, IMG)
                 VALUES
                 ($1, $2, $3, $4, $5, $6) returning *`;
 
    const result = await db.query(sql, params); 
    res.json(result);            
 
 };

 const putPersonaje = async (req,res) => {

    const {nombre, descripcion,edad,id_actor,id_pelicula, IMG } = req.body;
    const {id} = req.params;
    
    const params = [
        nombre,
        descripcion,
        edad,
        id_actor,
        id_pelicula,
        IMG,
        id
    ];
    
    const sql = `update Personaje 
    set
     nombre = $1, 
     descripcion = $2,
     edad = $3,
     id_actor = $4,
     id_pelicula = $5,
     IMG = $6
    where id = $7 returning *`;
    
    const result = await db.query(sql, params);
    res.json(result);
    
    };

    const dltPersonaje = async (req,res) => {
        const params = [req.params.id];
    
        const sql = `DELETE FROM Personaje WHERE id = $1 returning *`;
        const result = await db.query(sql,params);
    
        res.json(result);
    };

export {getPersonaje, postPersonaje,putPersonaje,dltPersonaje}