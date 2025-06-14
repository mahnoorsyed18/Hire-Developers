const express = require('express');
const bodyParser = require('body-parser');

const { getStoredEngineers, storeEngineers } = require('./data/engineers');
const { getStoredTalents, storeTalents } = require('./data/talents');
const { getStoredExperienced, storeExperienced } = require('./data/experienced');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Routes for Engineers
app.get('/engineers', async (req, res) => {
  const storedEngineers = await getStoredEngineers();
  res.json({ engineers: storedEngineers });
});

app.post('/engineers', async (req, res) => {
  const existingEngineers = await getStoredEngineers();
  const engineerData = req.body;
  const newEngineer = {
    ...engineerData,
    id: Math.random().toString(),
  };
  const updatedEngineers = [newEngineer, ...existingEngineers];
  await storeEngineers(updatedEngineers);
  res.status(201).json({ message: 'Stored new engineer.', engineer: newEngineer });
});

// Routes for Talents
app.get('/talents', async (req, res) => {
  const storedTalents = await getStoredTalents();
  res.json({ talents: storedTalents });
});

app.post('/talents', async (req, res) => {
  const existingTalents = await getStoredTalents();
  const talentData = req.body;
  const newTalent = {
    ...talentData,
    id: Math.random().toString(),
  };
  const updatedTalents = [newTalent, ...existingTalents];
  await storeTalents(updatedTalents);
  res.status(201).json({ message: 'Stored new talent.', talent: newTalent });
});

// Routes for Experienced
app.get('/experienced', async (req, res) => {
  const storedExperienced = await getStoredExperienced();
  res.json({ experienced: storedExperienced });
});

app.post('/experienced', async (req, res) => {
  const existingExperienced = await getStoredExperienced();
  const experiencedData = req.body;
  const newExperienced = {
    ...experiencedData,
    id: Math.random().toString(),
  };
  const updatedExperienced = [newExperienced, ...existingExperienced];
  await storeExperienced(updatedExperienced);
  res.status(201).json({ message: 'Stored new experienced person.', experienced: newExperienced });
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
