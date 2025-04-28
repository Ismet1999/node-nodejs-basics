import os from "os";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { Worker } from "worker_threads";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
  const filePath = join(__dirname, "worker.js");
  const numCPUs = os.cpus().length;
  const workers = [];
  const initialCount = 10;
  for (let i = 0; i < numCPUs; i++) {
    const workerPromise = new Promise((res, rej) => {
      const worker = new Worker(filePath);

      worker.postMessage(initialCount + i);

      worker.on("message", (msg) => res({ status: "resolved", data: msg }));

      worker.on("error", () => rej({ status: "error", data: null }));

      worker.on("exit", (code) => {
        if (code !== 0) {
          rej({ status: "error", data: null });
        }
      });
    });

    workers.push(workerPromise);
  }
  
  const finalResults = await Promise.all(workers);
  console.log(finalResults);
};

await performCalculations();
