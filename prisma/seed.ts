import prisma from '../lib/prisma';
import * as fs from "fs";

async function main() {
  const countries = JSON.parse(
    fs.readFileSync("./prisma/seed_data/countries.json", "utf-8")
  );

  for (const country of countries) {
    await prisma.country.create({
      data: country,
    });
  }
  console.log("Countries imported successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
