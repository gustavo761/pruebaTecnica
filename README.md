# Prueba Técnica con NodeJS y Express
Manual de instalación para entornos de desarrollo

## 1. Requerimientos

| Nombre       | Versión | Descripción                                            | Instalación                                      |
|--------------|---------|--------------------------------------------------------|--------------------------------------------------|
| `PostgreSQL` | ^12     | Gestor de base de datos.                               | https://www.postgresql.org/download/linux/debian |
| `NodeJS`     | ^16     | Entorno de programación de JavaScript.                 | `nvm install 16` https://github.com/nvm-sh/nvm   |
| `NPM`        | ^8      | Gestor de paquetes de NodeJS.                          | `npm install -g npm@8.5.5`                       |


### Clonación del proyecto e instalación de dependencias

```bash
# Clonación del proyecto
git clone https://github.com/gustavo761/pruebaTecnica.git

# Ingresamos dentro de la carpeta del proyecto
cd pruebaTecnica

# Instalamos dependencias 
npm install
```

### Archivos de configuración.

Crear los archivos de configuración con base en los archivos `sample` y modificar los valores que sean necesarios.

```bash
# Variables de entorno globales
cp .env.sample .env
```

## 2. Creación y configuración de la Base de Datos

Antes de ejecutar el siguiente comando asegúrate de que la base de datos exista (con sus correspondientes esquemas) y se tenga acceso a esta.

### Crear base de datos 
Ejemplo: en este caso se llamó `tareas_db` a la base de datos con el siguiente comando: 

```bash
# creando base de datos
psql -h localhost -p 5432 -U postgres -c "DROP DATABASE IF EXISTS tareas_db"
psql -h localhost -p 5432 -U postgres -c "CREATE DATABASE tareas_db ENCODING 'UTF-8'"
```
Debe crear el esquema `testnodejs` utilizando el siguiente comando:

```bash
# creando esquemas
psql -h localhost -p 5432 -U postgres -d database_db -c "CREATE SCHEMA testnodejs AUTHORIZATION postgres"
```

Finalmente ejecute el siguiente comando que iniciará la migración existente en el repositorio: 

```bash
# iniciando la migración de la base de datos
npm run migrations:run
```
```bash
# en caso de que se desee restablecer la base de datos ejecute el siguiente comando
npm run setup
```

## 3. Despliegue de la aplicación

```bash
# Ejecución en modo desarrollo
npm run start

# Ejecución en modo desarrollo (live-reload)
npm run dev
```