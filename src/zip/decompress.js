import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { pipeline } from "stream/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  const sourceFile = join(__dirname, "files", "archive.gz");
  const targetFile = join(__dirname, "files", "fileToCompress.txt");

  const gunzip = createGunzip();
  const source = createReadStream(sourceFile);
  const destination = createWriteStream(targetFile);
  await pipeline(source, gunzip, destination);
  console.log("File was successfully decompressed");
};

await decompress();
