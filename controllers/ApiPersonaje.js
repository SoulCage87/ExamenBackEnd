import { db } from "../db/conn.js";

const getPersonaje = async (req, res) => {
 
    const sql = `SELECT * from Personaje`;
    const result = await db.query(sql);
    res.json(result);
};

const postPersonaje = async (req,res) => {

    const {nombre, descripcion,edad,id_actor,id_pelicula} = req.body;
    const params = [nombre,descripcion,edad,id_actor,id_pelicula];
 
    const sql = `INSERT INTO Personaje
                 (nombre,descripcion,edad,id_actor,id_pelicula)
                 VALUES
                 ($1, $2, $3, $4, $5) returning *`;
 
    const result = await db.query(sql, params); 
    res.json(result);            
 
 };

 const putPersonaje = async (req,res) => {

    const {nombre, descripcion,edad,id_actor,id_pelicula } = req.body;
    const {id} = req.params;
    
    const params = [
        nombre,
        descripcion,
        edad,
        id_actor,
        id_pelicula,
        id
    ];
    
    const sql = `update Personaje 
    set
     nombre = $1, 
     descripcion = $2,
     edad = $3,
     id_actor = $4,
     id_pelicula = $5
    where id = $6 returning *`;
    
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