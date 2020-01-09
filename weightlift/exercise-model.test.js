const db = require('../data/db-config.js');
const ExerciseModel = require("./exercise-model.js");

describe('exercise-model', () => {
    // beforeEach(async () => {
    //     await db('exercise').truncate();
    // });

  describe('addExercise()', () => {
    // beforeEach(async () => {
    //     await db('exercise').truncate();
    // })

    it('Should add exercise into the database', async () => {
        await ExerciseModel.addExercise({ 
            name: "ray", 
            sets: "10", 
            reps: "5", 
            time: "15 minutes", 
            region: "arms", 
            completed: false, 
            user_id: 1 
        });

        let exerciseModel = await db('exercise');
        expect(exerciseModel).toHaveLength(1);
    });
  });
});
