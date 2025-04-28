import { readFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, "files", "fileToRead.txt");

  try {
    const content = await readFile(filePath, "utf-8");
    console.log(content);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
