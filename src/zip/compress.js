import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { pipeline } from "stream/promises";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  const sourceFile = join(__dirname, "files", "fileToCompress.txt");
  const targetFile = join(__dirname, "files", "archive.gz");

  const gzip = createGzip();
  const source = createReadStream(sourceFile);
  const destination = createWriteStream(targetFile);
  await pipeline(source, gzip, destination);
  console.log("File was successfully compressed");
};

await compress();
