create database proyecto_Final_Electiva1
use proyecto_Final_Electiva1
CREATE TABLE USUARIOS
(
Id_Usuario int PRIMARY KEY AUTO_INCREMENT,
Usuario Nvarchar(50),
Cargo Nvarchar(50),
Sueldo decimal
)

INSERT INTO USUARIOS(Usuario,Cargo,Sueldo)
values
('Juan','Supervisor',100)