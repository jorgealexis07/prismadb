-- CreateTable
CREATE TABLE "Explorer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "mission" VARCHAR(255) NOT NULL,
    "azureCertification" BOOLEAN NOT NULL DEFAULT false,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Explorer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alumno" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" TEXT NOT NULL,
    "missionCommander" VARCHAR(255) NOT NULL,
    "enrrollments" INTEGER NOT NULL,
    "hasCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Alumno_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Explorer_name_key" ON "Explorer"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Alumno_name_key" ON "Alumno"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Alumno_lang_key" ON "Alumno"("lang");

-- CreateIndex
CREATE UNIQUE INDEX "Alumno_enrrollments_key" ON "Alumno"("enrrollments");
