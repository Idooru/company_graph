import { spawn } from "child_process";

const getPythonData = (file) => {
  return new Promise((resolve, reject) => {
    const process = spawn("python", [file]);

    let streamOutput = "";
    let streamError = "";

    process.stdout.on("data", (data) => (streamOutput += data.toString()));
    process.stderr.on("data", (data) => (streamError += data.toString()));
    process.on("error", (err) => reject(err));

    process.on("close", (code) =>
      code === 0
        ? resolve(JSON.parse(streamOutput))
        : reject(new Error(`Command existed with code ${code}`)),
    );
  });
};

export default getPythonData;
