-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "victorys" TEXT NOT NULL,
    "pix_key" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "championship" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "victorys" TEXT NOT NULL,
    "pix_key" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "champion_id" TEXT NOT NULL,

    CONSTRAINT "championship_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_pix_key_key" ON "users"("pix_key");

-- CreateIndex
CREATE UNIQUE INDEX "championship_pix_key_key" ON "championship"("pix_key");

-- AddForeignKey
ALTER TABLE "championship" ADD CONSTRAINT "championship_champion_id_fkey" FOREIGN KEY ("champion_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
