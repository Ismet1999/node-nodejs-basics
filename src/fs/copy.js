import { promises as fs } from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const sourceDir = path.join(__dirname, "files");
  const targetDir = path.join(__dirname, "files_copy");

  try {
    await fs.cp(sourceDir, targetDir, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await copy();
