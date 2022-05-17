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
CREATE UNIQUE INDEX "Alumno_name_key" ON "Alumno"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Alumno_lang_key" ON "Alumno"("lang");

-- CreateIndex
CREATE UNIQUE INDEX "Alumno_enrrollments_key" ON "Alumno"("enrrollments");
