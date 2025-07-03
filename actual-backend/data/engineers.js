const fs = require("node:fs/promises");

async function getStoredEngineers() {
  const path = require("path");
  const filePath = path.join(__dirname, "..", "engineers.json");
  const rawFileContent = await fs.readFile(filePath, { encoding: "utf-8" });
  const data = JSON.parse(rawFileContent);
  const storedEngineers = data.engineers ?? [];
  return storedEngineers;
}

function storeEngineers(engineers) {
  const path = require("path");
  const filePath = path.join(__dirname, "..", "engineers.json");
  return fs.writeFile(filePath, JSON.stringify({ engineers: engineers || [] }));
}

exports.getStoredEngineers = getStoredEngineers;
exports.storeEngineers = storeEngineers;
