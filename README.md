# NestJS Generic Services and Controllers
Este proyecto está construido con NestJS y tiene como objetivo demostrar el uso de servicios y controladores genéricos para manejar operaciones CRUD en una aplicación basada en TypeScript. Utiliza TypeORM para la gestión de la base de datos y soporta paginación, validación y DTOs para la estructura de datos.
## Características
- **Servicios Genéricos:** Implementación de servicios genéricos para operaciones CRUD utilizando TypeORM.
- **Controladores Genéricos:** Controladores que extienden clases base para reutilizar la lógica común.
- **Paginación:** Soporte para paginación en las consultas de la base de datos.
- **Validación:** Uso de class-validator para la validación de DTOs.
- **Configuración de Base de Datos:** Conexión a MySQL utilizando variables de entorno.
## Estructura del Proyecto
- `src/common/base`: Contiene las clases base para servicios y controladores.
- `src/domain`: Define los DTOs y entidades utilizadas en el proyecto.
- `src/modules/users`: Módulo de ejemplo que implementa las clases genéricas para el manejo de usuarios.
- `src/config`: Configuración de la base de datos utilizando variables de entorno.
## Lista de comandos
1- Clonar repositorio  
```bash
git clone https://github.com/AbrilSabatini/nest-example-generics.git
```
2- Instala las dependencias:  
```bash
npm i
```
3- Configura las variables de entorno en un archivo `.env` a partir de `.env.template`.  
4- Inicia la aplicación:
```bash
npm run start:dev
```
