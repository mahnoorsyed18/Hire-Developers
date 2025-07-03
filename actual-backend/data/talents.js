const fs = require("node:fs/promises");

async function getStoredTalents() {
  const path = require("path");
  const filePath = path.join(__dirname, "..", "talents.json");
  const rawFileContent = await fs.readFile(filePath, { encoding: "utf-8" });
  const data = JSON.parse(rawFileContent);
  const storedTalents = data.talents ?? [];
  return storedTalents;
}

function storeTalents(talents) {
  const path = require("path");
  const filePath = path.join(__dirname, "..", "talents.json");
  return fs.writeFile(filePath, JSON.stringify({ talents: talents || [] }));
}

exports.getStoredTalents = getStoredTalents;
exports.storeTalents = storeTalents;
