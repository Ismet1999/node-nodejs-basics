import { createHash } from "crypto";
import { createReadStream } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { pipeline } from "stream/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  const hash = createHash("sha256");
  const filePath = join(__dirname, "files", "fileToCalculateHashFor.txt");
  const stream = createReadStream(filePath);

  await pipeline(stream, hash);

  const hashHex = hash.digest("hex");
  console.log(hashHex);
};

await calculateHash();
