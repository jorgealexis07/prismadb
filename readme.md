## CREACION DE API CON: Express + DB

### Instalacion
Para instalar ete proyecto debera clonarlo y descargar las dependencias del proyecto con:
`npm install`

Tamnien debera crear el archivo `.env` en la raiz del proyecto con el siguente contenido que tambien estara en el paso 6:
~~~
DATABASE_URL="postgresql://TUUSUARIO:PASSWORD@localhost:5432/explorers_api?schema=public"
~~~

### Parte 1: Conexión a Base de Datos Postgresql

1. Cree un proyecto e instale dependencias con:
~~~
npm install express --save-dev
npm install prisma --save-dev
~~~

2. Inicializamos prisma con:
`npx prisma init`

3. Después de correr el comando anterior, se nos creara el archivo .env y la carpeta prisma.

5. Ahora nos vamos a postgresql y creamos una BD con el siguiente nombre: `explorers_api.`

6. Modificamos el archivo `.env`, colocamos nuestro usuario y password:
`.env`
~~~
DATABASE_URL="postgresql://TUUSUARIO:PASSWORD@localhost:5432/explorers_api?schema=public"
~~~
