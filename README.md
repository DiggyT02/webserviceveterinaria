1.Crear la BD y tabla

CREATE DATABASE veterinaria;

USE veterinaria;
```
CREATE TABLE mascotas(
id      INT primary KEY	auto_increment NOT null,
nombre  VARCHAR(40) NOT NULL,
tipo    ENUM('PERRO', 'GATO') NOT NULL,
raza    VARCHAR(40) NOT NULL,
color   VARCHAR(40) NOT NULL,
peso    DOUBLE(5,2) NOT NULL,
genero  ENUM('H','M') NOT NULL
)ENGINE = INNODB;
```
2.Abrir el Visual Studio y creamos una carpeta para nuestro proyecto.

3.Ejecutar el siguiente comando
```
npm init -y
```
4.Instalar las dependencias.
```
npm install express mysql2 dotenv
```
5.Creamos el .env
```
DB_HOST = localhost
DB_USER = root
DB_PASSWORD =
DB_DATABASE =
DB_PORT = 3306
PORT = 3000
```
