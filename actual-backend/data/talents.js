const fs = require('node:fs/promises');

async function getStoredTalents() {
  const rawFileContent = await fs.readFile('talents.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedTalents = data.talents ?? [];
  return storedTalents;
}

function storeTalents(talents) {
  return fs.writeFile('talents.json', JSON.stringify({ talents: talents || [] }));
}

exports.getStoredTalents = getStoredTalents;
exports.storeTalents = storeTalents;
