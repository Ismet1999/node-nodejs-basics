import { fork } from "child_process";

import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const spawnChildProcess = async (args) => {
  const childPath = join(__dirname, "files", "script.js");
  const childProcess = fork(childPath, args, {
    stdio: ["pipe", "pipe", "inherit", "ipc"],
  });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(/* [someArgument1, someArgument2, ...] */);
