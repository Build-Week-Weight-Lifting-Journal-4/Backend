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
    // .select("e.name", "e.sets","e.region","e.completed","e.time","e.user_id")
    // .join("users as u", "u.id", "e.user_id")
        .where({ id })
        .first();
}

function findExercise() {
    return db("exercise");
}

function addExercise(exercise) {
    console.log(exercise);
    db("exercise")
    .insert(exercise)
    .then(console.log)
    return db("exercise")
    //     .select("e.name", "e.sets","e.region","e.completed","e.time","e.user_id")
    //     .join("users as u", "u.id", "e.user_id")
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