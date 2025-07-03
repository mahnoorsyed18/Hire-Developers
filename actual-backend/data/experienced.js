const fs = require("node:fs/promises");

async function getStoredExperienced() {
  const path = require("path");
  const filePath = path.join(__dirname, "..", "experienced.json");
  const rawFileContent = await fs.readFile(filePath, {
    encoding: "utf-8",
  });
  const data = JSON.parse(rawFileContent);
  const storedExperienced = data.experienced ?? [];
  return storedExperienced;
}

function storeExperienced(experienced) {
  const path = require("path");
  const filePath = path.join(__dirname, "..", "experienced.json");
  return fs.writeFile(
    filePath,
    JSON.stringify({ experienced: experienced || [] })
  );
}

exports.getStoredExperienced = getStoredExperienced;
exports.storeExperienced = storeExperienced;
