const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const woopa4 = await prisma.explorer.upsert({
        where: { name: 'Woopa 4' },
        update: {},
        create: {
          name: 'Woopa 4',
                  username: 'ajolonauta4',
                  mission: 'Java'
        },
      });

    console.log('Create 4 explorers');

    const alumno = await prisma.alumno.upsert({
        where: { name: 'Alumno' },
        update: {},
        create: {
          name: 'Alumno',
          lang: 'Español',
          missionCommander: 'Carlo',
          enrrollments: 1
        },
      });
  
      const alumno1 = await prisma.alumno.upsert({
        where: { name: 'Alumno1' },
        update: {},
        create: {
          name: 'Alumno1',
          lang: 'Español',
          missionCommander: 'Fernanda Ochoa',
          enrrollments: 2
        },
      });

      const alumno2 = await prisma.alumno.upsert({
        where: { name: 'Alumno2' },
        update: {},
        create: { 
          name: 'Alumno2',
          lang: 'frances',
          missionCommander: 'Rodrigo',
          enrrollments: 4

        },
      });
  

  
      console.log('Create 2 alumnos');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();