import { readdir } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  try {
    const filesDir = join(__dirname, "files");
    const files = await readdir(filesDir);
    console.log(files);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
