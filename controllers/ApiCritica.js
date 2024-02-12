import { db } from "../db/conn.js";

const getCritica = async (req, res) => {
 
    const sql = `SELECT * from Critica`;
    const result = await db.query(sql);
    res.json(result);
};

const postCritica = async (req,res) => {

    const {Comentario_Critica} = req.body;
    const params = [Comentario_Critica];
 
    const sql = `INSERT INTO Critica
                 (Comentario_Critica)
                 VALUES
                 ($1) returning *`;
 
    const result = await db.query(sql, params); 
    res.json(result);            
 
 };

 const putCritica = async (req,res) => {

    const {Comentario_Critica} = req.body;
    const {id} = req.params;
    
    const params = [
        Comentario_Critica,
        id
    ];
    
    const sql = `update Critica 
    set
    Comentario_Critica = $1
    where id = $2 returning *`;
    
    const result = await db.query(sql, params);
    res.json(result);
    
    };

    const dltCritica = async (req,res) => {
        const params = [req.params.id];
    
        const sql = `DELETE FROM Critica WHERE id = $1 returning *`;
        const result = await db.query(sql,params);
    
        res.json(result);
    };

    export {getCritica, postCritica, putCritica, dltCritica}
