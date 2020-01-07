const db = require("../data/db-config.js");

module.exports = {
    findWorkout,
    // addWorkout,
    findById,
    // updateWorkout,
    removeWorkout

};

function findById(id) {
    return db("workout as w")
    .select("w.id", "u.full_name", "e.name","e.amount","e.region","e.completed","e.time")
    .join("exercise as e", "e.id", "w.exercise_id")
    .join("users as u", "u.id", "w.user_id")
        .where("w.id", id )
        .first();
}

// function findWorkout() {
//     return db("workout");
// }

function findWorkout() {
    return db("workout as w")
    .select("w.id", "u.full_name", "e.name","e.amount","e.region","e.completed","e.time")
    .join("exercise as e", "e.id", "w.exercise_id")
    .join("users as u", "u.id", "w.user_id");
}

// function addWorkout(workout) {
//     return db("workout")
//         .insert(workout, "id")
//         .then(ids => {
//             const [id] = ids;

//             return findById(id);
//         });
// }

// function updateWorkout(changes, id) {
//     return db("workout")
//         .where({ id })
//         .update(changes)
// }

function removeWorkout(id) {
    return db("workout")
        .where({ id })
        .del();
}