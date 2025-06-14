const fs = require('node:fs/promises');

async function getStoredEngineers() {
  const rawFileContent = await fs.readFile('engineers.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedEngineers = data.engineers ?? [];
  return storedEngineers;
}

function storeEngineers(engineers) {
  return fs.writeFile('engineers.json', JSON.stringify({ engineers: engineers || [] }));
}

exports.getStoredEngineers = getStoredEngineers;
exports.storeEngineers = storeEngineers;
