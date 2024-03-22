import { db } from "../db/conn.js"

const getPelicula = async (req, res) => {
 
    const sql = `SELECT pelicula_serie.id, pelicula_serie.nombre,pelicula_serie.sinopsis, pelicula_serie.titulo, pelicula_serie.anio_lanzamiento, pelicula_serie.genero, 
    encode(pelicula_serie.imagen, 'base64') AS imagen,
    pelicula_serie.mime_type, Genero.nombre_genero
    FROM pelicula_serie
    INNER JOIN Genero ON pelicula_serie.genero = Genero.nombre_genero
    WHERE pelicula_serie.activo = true
    ORDER BY pelicula_serie.id DESC;`;
    const result = await db.query(sql);
    res.json(result);
}; 

const postPelicula = async (req,res) => {

    try {
        const {nombre, titulo,anio_lanzamiento,genero,sinopsis} = req.body;

        const { buffer, mimetype, originalname } = req.file;

    const params = [nombre,titulo,anio_lanzamiento,genero,sinopsis,buffer,mimetype,originalname];
 
    const sql = `INSERT INTO pelicula_serie
                 (nombre,titulo,anio_lanzamiento,genero,sinopsis,imagen,mime_type,nombre_archivo)
                 VALUES
                 ($1, $2, $3, $4, $5, $6, $7, $8) returning 'Incersion Exitosa' mensaje`;

                 console.log(req.body)
                 console.log(req.file)
 
    const result = await db.query(sql, params); 
    res.json(result);

    } catch (error) {
        res.status(500).json({"mensaje": error.message})
    }
    
 
 };

 const putPelicula = async (req,res) => {

try {
   const {sinopsis } = req.body;
    const {id} = req.params;
    
    const params = [
        sinopsis,
        id
    ];

    console.log(req.body)
    
    const sql = `UPDATE pelicula_serie 
    SET sinopsis = $1
     WHERE id = $2 returning 'Actualizado con exito' mensaje`;
    
    const result = await db.query(sql, params);
    res.json(result); 
} catch (e) {
    res.status(500).json({mensaje: `Error al actualizar ${e.message}`});
}

    
    
    };

    const dltPelicula = async (req,res) => {
        
        try {
            const params = [req.params.id];
    
            const sql = `UPDATE pelicula_serie
            SET activo = false
            WHERE id = $1
            RETURNING 'Pelicula Borrada' mensaje`;
            
            const result = await db.query(sql,params);
        
            res.json(result);  
        } catch (e) {
            res.status(500).json(e.message)
        }
        
    };

    export {getPelicula, postPelicula, putPelicula, dltPelicula}