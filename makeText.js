import { MarkovMachine } from "./markov.js";
import { readFileText, readUrlText } from "./utils.js";

const fileType = process.argv[2];
const filePath = process.argv[3];


let text;

if (filePath === undefined || fileType === undefined) {
  console.log('Include necessary arguments: file type, file path');
  process.exit(1);
}

if (fileType.toLowerCase() === 'file') {
  text = await readFileText(filePath);

} else if (fileType.toLowerCase() === "url") {
  let urlVerified;

  try {
    urlVerified = new URL(filePath);

  } catch (err) {
    console.log('Invalid URL:', err);
    process.exit(1);
  }

  text = await readUrlText(urlVerified);

} else {
  throw Error('Incorrect file type');
}

const machine = new MarkovMachine(text);

console.log(machine.getText());