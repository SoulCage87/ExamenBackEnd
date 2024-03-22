import { db } from "../db/conn.js";

const getPersonaje = async (req, res) => {
    try {
        const sql = `SELECT id, 
            nombre, 
            descripcion,
            mime_type, 
            encode(imagen, 'base64') imagen  
            FROM Personaje 
            WHERE activo = true
            ORDER BY fecha_creacion DESC`;
        const result = await db.query(sql);

        if (result.length > 0) {
            res.json(result);
        } else {
            res.status(404).json({ mensaje: "Sin datos que mostrar" });
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const postPersonaje = async (req,res) => {

    try {
        const {nombre, descripcion} = req.body;

        const { buffer, mimetype, originalname } = req.file;
    
        const params = [nombre,descripcion,buffer,mimetype,originalname];
     
        const sql = `INSERT INTO Personaje
                     (nombre,descripcion,imagen,mime_type,nombre_archivo)
                     VALUES
                     ($1, $2, $3, $4, $5) returning nombre, 'Incersion Exitosa' mensaje`;
     
        const result = await db.query(sql, params); 
        res.json(result);            
       
    } catch (error) {
       res.status(500).json(error.message) 
    }
   
 };

 const putPersonaje = async (req,res) => {

    try {
        const { descripcion } = req.body

        const { id } = req.params

        const params = [descripcion, id]

        const sql = `UPDATE Personaje
                 SET descripcion = $1
                 WHERE id = $2
                 RETURNING descripcion, 'Personaje Editado' mensaje`

        const result = await (db.query(sql, params))
        res.status(200).json(result)
    } catch (e) {
        res.status(500).json(e.message)
    }
    
    
    };

    const dltPersonaje = async (req,res) => {

        try {
            const params = [req.params.id];
    
        const sql = `UPDATE Personaje
             SET activo = false
             WHERE id = $1
             RETURNING 'Publicacion Borrada' mensaje`;
        const result = await db.query(sql,params);
        res.json(result); 
        } catch (error) {
            res.status(500).json(error.message)
        }
       
    };

export {getPersonaje, postPersonaje,putPersonaje,dltPersonaje}