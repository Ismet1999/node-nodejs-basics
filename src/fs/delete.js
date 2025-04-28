import { unlink } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const sourceFile = join(__dirname, "files", "fileToRemove.txt");
  try {
    await unlink(sourceFile);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();
