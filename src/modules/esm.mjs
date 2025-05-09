import path, { dirname } from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import "./files/c.cjs";
import { fileURLToPath } from "url";
import aJson from "./files/a.json" with { type: "json" };
import bJson from "./files/b.json" with { type: "json" };

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = aJson;
} else {
  unknownObject = bJson;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
