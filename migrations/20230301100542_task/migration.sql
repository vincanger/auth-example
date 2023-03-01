/*
  Warnings:

  - You are about to drop the column `userId` on the `Task` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "isDone" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Task" ("description", "id", "isDone") SELECT "description", "id", "isDone" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
