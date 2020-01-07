const db = require("../data/db-config.js");

module.exports = {
    findWorkout,
    addWorkout,
    findById,
    updateWorkout,
    removeWorkout

};

function findById(id) {
    return db("workout")
        .where({ id })
        .first();
}

function findWorkout() {
    return db("workout");
}

function addWorkout(workout) {
    return db("workout")
        .insert(workout, "id")
        .then(ids => {
            const [id] = ids;

            return findById(id);
        });
}

function updateWorkout(changes, id) {
    return db("workout")
        .where({ id })
        .update(changes)
}

function removeWorkout(id) {
    return db("workout")
        .where({ id })
        .del();
}