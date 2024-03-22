-- Active: 1705367913692@@127.0.0.1@5432@personajes@public
CREATE Table Personaje
(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(40),
    descripcion VARCHAR(500),
    edad INT,
    id_actor INT REFERENCES Actor(id),
    id_pelicula INT REFERENCES pelicula_serie(id),
    Fecha_Creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    imagen bytea,
     mime_type VARCHAR(500),
    nombre_archivo VARCHAR(500),
);

ALTER TABLE personaje
DROP COLUMN id_actor

ALTER TABLE actor
ADD activo BOOLEAN DEFAULT true

CREATE Table Genero
(
    nombre_genero VARCHAR(40) PRIMARY KEY
)

DROP TABLE Actor

CREATE TABLE Actor
(
    nombre VARCHAR(50) PRIMARY KEY
)

CREATE TABLE pelicula_serie
(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(500),
    titulo VARCHAR(300),
    anio_lanzamiento INT,
    genero VARCHAR(40) REFERENCES Genero(nombre_genero)
)


CREATE TABLE tbl_usuarios(
    nombre_usuario VARCHAR(30) PRIMARY KEY,
    correo_electronico VARCHAR(50),
    contrasena VARCHAR(20),
    fecha_creacion TIMESTAMP DEFAULT current_timestamp, 
    activo BOOLEAN DEFAULT true
)

ALTER TABLE pelicula_serie
ADD  nombre_archivo VARCHAR(500)
    
    

SELECT * FROM pelicula_serie

SELECT * FROM Personaje

SELECT * FROM tbl_usuarios

DELETE FROM pelicula_serie

SELECT nombre,descripcion,
    imagen,mime_type, id
    FROM Personaje

    UPDATE pelicula_serie
    SET activo = TRUE
    WHERE id = 18;
   
 
   INSERT INTO genero
   (nombre_genero)
   VALUES
   ('Horror')

 SELECT pelicula_serie.*, Genero.nombre_genero
FROM pelicula_serie
INNER JOIN Genero ON pelicula_serie.genero = Genero.nombre_genero;


SELECT pelicula_serie.id, pelicula_serie.nombre, pelicula_serie.titulo, pelicula_serie.anio_lanzamiento, pelicula_serie.genero, 
       encode(pelicula_serie.imagen, 'base64') AS imagen,
       pelicula_serie.mime_type, pelicula_serie.nombre_archivo, Genero.nombre_genero
FROM pelicula_serie
INNER JOIN Genero ON pelicula_serie.genero = Genero.nombre_genero;


SELECT a.nombre, a.descripcion,
b.nombre as Actor, c.titulo as Titulo_de_Pelicula
FROM Personaje a
INNER JOIN Actor b on a.id_actor = b.id
INNER JOIN pelicula_serie c on a.id_pelicula = c.id

SELECT a.titulo, a.anio_lanzamiento as Año_Lanzamiento,
b.Comentario_Critica as Critica, c.nombre_genero as Genero
FROM pelicula_serie a 
INNER JOIN Critica b on a.id_critica = b.id
INNER JOIN Genero c on a.genero = c.id

ALTER TABLE Personaje
<<<<<<< Updated upstream
ADD COLUMN IMG VARCHAR(10000)
=======
ADD COLUMN actor VARCHAR(50) REFERENCES actor(nombre)
>>>>>>> Stashed changes


  SELECT * from pelicula_serie

  SELECT * from Personaje
 

<<<<<<< Updated upstream
DELETE  FROM pelicula_serie
=======
DELETE  FROM pelicula_serie

SELECT pelicula_serie.id, pelicula_serie.nombre,pelicula_serie.sinopsis, pelicula_serie.titulo, pelicula_serie.anio_lanzamiento, pelicula_serie.genero, 
    encode(pelicula_serie.imagen, 'base64') AS imagen,
    pelicula_serie.mime_type, Genero.nombre_genero
    FROM pelicula_serie
    
    INNER JOIN Genero ON pelicula_serie.genero = Genero.nombre_genero;
>>>>>>> Stashed changes
