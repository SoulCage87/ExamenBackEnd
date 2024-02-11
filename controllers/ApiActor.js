import { db } from "../db/conn.js";

const getActor = async (req, res) => {
 
    const sql = `SELECT * from Actor`;
    const result = await db.query(sql);
    res.json(result);
};

const postActor = async (req,res) => {

    const {nombre,Nacionalidad} = req.body;
    const params = [nombre,Nacionalidad];
 
    const sql = `INSERT INTO Actor
                 (nombre,Nacionalidad)
                 VALUES
                 ($1, $2) returning *`;
 
    const result = await db.query(sql, params); 
    res.json(result);            
 
 };

 const putActor = async (req,res) => {

    const {nombre, Nacionalidad} = req.body;
    const {id} = req.params;
    
    const params = [
        nombre,
        Nacionalidad,
        id
    ];
    
    const sql = `update Actor 
    set
     nombre = $1, 
     Nacionalidad = $2
     where id = $3 returning *`;
    
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