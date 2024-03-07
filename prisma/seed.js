import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../server/lib/password.js';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: 'mail@michael-buchholz.com' },
    update: {},
    create: {
      email: 'mail@michael-buchholz.com',
      name: 'Micha',
      password: hashPassword('secret'),
    },
  });

  await prisma.topic.upsert({
    where: { slug: 'react' },
    update: {},
    create: {
      slug: 'react',
      name: 'React',
      description: 'The library for web and native user interfaces',
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
