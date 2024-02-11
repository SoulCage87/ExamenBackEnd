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


