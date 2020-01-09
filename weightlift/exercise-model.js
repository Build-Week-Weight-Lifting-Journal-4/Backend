const db = require("../data/db-config.js");

module.exports = {
    findExercise,
    addExercise,
    findById,
    updateExercise,
    removeExercise

};

function findById(id) {
    return db("exercise")
        .where({ id })
        .first();
}

function findExercise() {
    return db("exercise");
}

function addExercise(exercise) {
    return db("exercise")
        .insert(exercise, "id")
        .then(ids => {
            const [id] = ids;

            return findById(id);
        });
}

function updateExercise(changes, id) {
    return db("exercise")
        .where({ id })
        .update(changes)
}

function removeExercise(id) {
    return db("exercise")
        .where({ id })
        .del();
}