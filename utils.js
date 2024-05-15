import * as fs from 'fs/promises';

/**
 * Take JS URL object and returns URL text
 * Throw error if website at url does not exist
 */
async function readUrlText(url) {
  console.log('webcat function - arg path:', url);
  let urlText = '';
  try {
    const resp = await fetch(url.href);
    urlText = await resp.text();
  } catch (err) {
    console.log(`Error reading ${url}: ${err}`);
    process.exit(1);
  }
  return urlText;
}



/**
 * Take file path and read file contents. Returns them in a string
 * Throw error if file at file path does not exist
 */
async function readFileText(path) {
  console.log('cat function - arg path:', path);
  let fileText;
  try {
    fileText = await fs.readFile(path, 'utf-8');


  } catch (err) {
    console.log(`Error reading ${path}: ${err}`);
    process.exit(1);
  }
  return fileText;
}

// await cat(filePath);

export { readFileText, readUrlText };