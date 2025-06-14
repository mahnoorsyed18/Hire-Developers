const fs = require('node:fs/promises');

async function getStoredExperienced() {
  const rawFileContent = await fs.readFile('experienced.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedExperienced = data.experienced ?? [];
  return storedExperienced;
}

function storeExperienced(experienced) {
  return fs.writeFile('experienced.json', JSON.stringify({ experienced: experienced || [] }));
}

exports.getStoredExperienced = getStoredExperienced;
exports.storeExperienced = storeExperienced;
