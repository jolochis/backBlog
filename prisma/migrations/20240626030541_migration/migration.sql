-- CreateTable
CREATE TABLE "entrada" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "contenido" TEXT NOT NULL,

    CONSTRAINT "entrada_pkey" PRIMARY KEY ("id")
);
