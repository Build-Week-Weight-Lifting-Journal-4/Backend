const express = require('express');
const helmet = require('helmet')
const db = require('../data/db-config.js')
require('dotenv').config()

const UserRouter = require('../weightlift/user-router.js');
const WorkoutRouter = require('../weightlift/workout-router.js');
const ExerciseRouter = require('../weightlift/exercise-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
    res.send({ api: "api is running..."})
})

server.use('/api/users', WorkoutRouter);
server.use('/api/users', UserRouter);
server.use('/api/users', ExerciseRouter);

module.exports = server;