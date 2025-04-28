import { rename as fsRename, access } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const sourceFile = join(__dirname, "files", "wrongFilename.txt");
  const targetFile = join(__dirname, "files", "properFilename.md");

  try {
    await fsRename(sourceFile, targetFile);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await rename();
