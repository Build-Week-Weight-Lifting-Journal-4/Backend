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

server.use('/workout', WorkoutRouter);
server.use('/users', UserRouter);
server.use('/exercise', ExerciseRouter);

module.exports = server;