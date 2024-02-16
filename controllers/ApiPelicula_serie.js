import { db } from "../db/conn.js"

const getPelicula = async (req, res) => {
 
    const sql = `SELECT a.titulo, a.anio_lanzamiento as Año_Lanzamiento,
    b.Comentario_Critica as Critica, c.nombre_genero as Genero
    FROM pelicula_serie a
    INNER JOIN Critica b on a.id_critica = b.id
    INNER JOIN Genero c on a.genero = c.id`;
    const result = await db.query(sql);
    res.json(result);
}; 

const postPelicula = async (req,res) => {

    const {nombre_director, titulo,anio_lanzamiento,id_critica,genero} = req.body;
    const params = [nombre_director,titulo,anio_lanzamiento,id_critica,genero];
 
    const sql = `INSERT INTO pelicula_serie
                 (nombre_director,titulo,anio_lanzamiento,id_critica,genero)
                 VALUES
                 ($1, $2, $3, $4, $5) returning *`;
 
    const result = await db.query(sql, params); 
    res.json(result); 

 
 };

 const putPelicula = async (req,res) => {

    const {nombre_director, titulo,anio_lanzamiento,id_critica,genero } = req.body;
    const {id} = req.params;
    
    const params = [
        nombre_director,
        titulo,
        anio_lanzamiento,
        id_critica,
        genero,
        id
    ];
    
    const sql = `update pelicula_serie 
    set
    nombre_director = $1, 
     titulo = $2,
     anio_lanzamiento = $3,
     id_critica = $4,
     genero = $5
    where id = $6 returning *`;
    
    const result = await db.query(sql, params);
    res.json(result);
    
    };

    const dltPelicula = async (req,res) => {
        const params = [req.params.id];
    
        const sql = `DELETE FROM pelicula_serie WHERE id = $1 returning *`;
        const result = await db.query(sql,params);
    
        res.json(result);
    };

    export {getPelicula, postPelicula, putPelicula, dltPelicula}