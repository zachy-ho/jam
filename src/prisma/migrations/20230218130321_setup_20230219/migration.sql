-- CreateEnum
CREATE TYPE "Visibility" AS ENUM ('PRIVATE', 'PUBLIC');

-- CreateTable
CREATE TABLE "jam" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "start_datetime" TIMESTAMP(3) NOT NULL,
    "end_datetime" TIMESTAMP(3) NOT NULL,
    "visibility" "Visibility" NOT NULL,
    "summary" VARCHAR(100),
    "description" VARCHAR(500),
    "venue" TEXT,

    CONSTRAINT "jam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jam_organiser" (
    "jam_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,

    CONSTRAINT "jam_organiser_pkey" PRIMARY KEY ("jam_id","user_id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticket" (
    "id" UUID NOT NULL,
    "jam_id" UUID NOT NULL,
    "serial_number" SERIAL NOT NULL,
    "ticket_configuration_id" UUID NOT NULL,

    CONSTRAINT "ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticket_configuration" (
    "id" UUID NOT NULL,
    "jamId" UUID NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(100),
    "price" INTEGER,

    CONSTRAINT "ticket_configuration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ticket_jam_id_serial_number_key" ON "ticket"("jam_id", "serial_number");

-- CreateIndex
CREATE UNIQUE INDEX "ticket_configuration_jamId_name_key" ON "ticket_configuration"("jamId", "name");

-- AddForeignKey
ALTER TABLE "jam_organiser" ADD CONSTRAINT "jam_organiser_jam_id_fkey" FOREIGN KEY ("jam_id") REFERENCES "jam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jam_organiser" ADD CONSTRAINT "jam_organiser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket" ADD CONSTRAINT "ticket_jam_id_fkey" FOREIGN KEY ("jam_id") REFERENCES "jam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket" ADD CONSTRAINT "ticket_ticket_configuration_id_fkey" FOREIGN KEY ("ticket_configuration_id") REFERENCES "ticket_configuration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket_configuration" ADD CONSTRAINT "ticket_configuration_jamId_fkey" FOREIGN KEY ("jamId") REFERENCES "jam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
