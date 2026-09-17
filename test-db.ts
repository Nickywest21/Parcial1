import { db } from "./src/prisma/db";

async function main() {
  const menus = await db.menu.findMany();

  console.log(menus);
}

main()
  .catch(console.error)
  .finally(async () => {
    await db.$disconnect();
  });