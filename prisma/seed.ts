import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed...");

  const demoUserId = "7d2c1bd8-7dc9-4f9f-adc9-9f9e813ffb76";

  const products = await prisma.product.createMany({
    data: Array.from({ length: 25 }).map((_, i) => ({
      userId: demoUserId,
      name: `Product ${i + 1}`,
      price: (Math.random() * 90 + 10).toFixed(2),
      quantity: Math.floor(Math.random() * 20),
      lowStockAt: 5,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 25 * (i * 5)),
    })),
  });

      console.log(`✅ Creados ${products.count} productos`);

}

main()
  .catch((e) => {
    
    console.error("Error en seed", e);
    process.exit(1);
  })
  .finally(async () => {
        console.log('🔌 Desconectando Prisma...');

    await prisma.$disconnect();
  });
