import { db } from "../db/conn.js";

const getActor = async (req, res) => {
 
    const sql = `SELECT * from Actor`;
    const result = await db.query(sql);
    res.json(result);
};

const postActor = async (req,res) => {

    const {nombre,Nacionalidad,Fecha_cumpleanos} = req.body;
    const params = [nombre,Nacionalidad,Fecha_cumpleanos];
 
    const sql = `INSERT INTO Actor
                 (nombre,Nacionalidad,Fecha_cumpleanos)
                 VALUES
                 ($1, $2, $3) returning *`;
 
    const result = await db.query(sql, params); 
    res.json(result);            
 
 };

 const putActor = async (req,res) => {

    const {nombre, Nacionalidad,Fecha_cumpleanos} = req.body;
    const {id} = req.params;
    
    const params = [
        nombre,
        Nacionalidad,
        Fecha_cumpleanos,
        id
    ];
    
    const sql = `update Actor 
    set
     nombre = $1, 
     Nacionalidad = $2,
     Fecha_cumpleanos = $3
     where id = $4 returning *`;
    
    const result = await db.query(sql, params);
    res.json(result);
    
    };

    const dltActor = async (req,res) => {
        const params = [req.params.id];
    
        const sql = `DELETE FROM Actor WHERE id = $1 returning *`;
        const result = await db.query(sql,params);
    
        res.json(result);
    };

export {getActor, postActor, putActor, dltActor}