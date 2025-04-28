import { Transform } from "stream";

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, enc, cb) {
      const reversedText = chunk.toString().split("").reverse().join("");
      cb(null, reversedText);
    },
  });

  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
