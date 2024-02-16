-- Active: 1705367913692@@127.0.0.1@5432@personajes@public
CREATE Table Personaje
(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(40),
    descripcion VARCHAR(500),
    edad INT,
    id_actor INT REFERENCES Actor(id),
    id_pelicula INT REFERENCES pelicula_serie(id),
    Fecha_Creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE Table Genero
(
    id SERIAL PRIMARY KEY,
    nombre_genero VARCHAR(40)
)

CREATE TABLE Actor
(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    Nacionalidad VARCHAR(50)
)

CREATE TABLE pelicula_serie
(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(500),
    titulo VARCHAR(300),
    anio_lanzamiento INT,
    id_critica INT REFERENCES Critica(id),
    genero INT REFERENCES Genero(id)
)

CREATE TABLE Critica
(
    id SERIAL PRIMARY KEY,
    Comentario_Critica VARCHAR(1000)
)

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
ADD COLUMN IMG VARCHAR(10000)

ALTER TABLE  pelicula_serie
  RENAME COLUMN nombre TO nombre_director;

  SELECT * from pelicula_serie

  SELECT * from Personaje
 

DELETE  FROM pelicula_serie