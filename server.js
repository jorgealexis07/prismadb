const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.get('/explorers', async (req, res) => {
    const allExplorers =  await prisma.explorer.findMany({});
    res.json(allExplorers);
});

app.get('/explorers/:id', async (req, res) => {
  const id = req.params.id;
  const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
  res.json(explorer);
});

app.post('/explorers', async (req, res) => {
    const explorer = {
      name: req.body.name,
      username: req.body.username,
      mission: req.body.mission
     };
    const message = 'Explorer creado.';
    await prisma.explorer.create({data: explorer});
    return res.json({message});
  });

  app.put('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer.update({
		where: {
			id: id
		},
		data: {
            name: req.body.name,
            username: req.body.username,
			mission: req.body.mission
		}
	})
	return res.json({message: "Actualizado correctamente"});
});

app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

//

app.get('/alumnos', async (req, res) => {
    const allAlumnos =  await prisma.alumno.findMany({});
    res.json(allAlumnos);
});

app.get('/alumnos/:id', async (req, res) => {
  const id = req.params.id;
  const alumno = await prisma.alumno.findUnique({where: {id: parseInt(id)}});
  res.json(alumno);
});

app.post('/alumno', async (req, res) => {
    const alumno = {
      name: req.body.name,
      lang: req.body.lang,
      missionCommander: req.body.missionCommander,
      enrrollments: req.body.enrrollments
     };
    const message = 'Alumno creado.';
    await prisma.alumno.create({data: alumno});
    return res.json({message});
  });

  app.put('/alumnos/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.alumno.update({
		where: {
			id: id
		},
		data: {
            name: req.body.name,
            missionCommander: req.body.missionCommander,
		}
	})
	return res.json({message: "Actualizado correctamente"});
});

app.delete('/alumnos/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});



app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});