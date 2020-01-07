const express = require('express');

const Workout = require('./workout-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Workout.findWorkout()
  .then(Workout => {
      const mWorkout= Workout.map((exer)=>exer.completed===0?{...exer,completed:false}:{...exer,completed:true})
    res.json(mWorkout);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get the workouts' });
  });
}); 

router.get('/:id', (req, res) => {

    const id = req.params.id;

    Workout.findById(id)
  .then(Workout => {
    res.json(Workout);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get the workout' });
  });
}); 

router.post('/', (req, res) => {
  const wData = req.body;

  Workout.addWorkout(wData)
  .then(added => {
    res.status(201).json(added);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new workout' });
  });
});  

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Workout.findById(id)
    .then(workout => {
      if (workout) {
        Workout.updateWorkout(changes, id)
        .then(updatedWorkout => {
          res.json(updatedWorkout);
        });
      } else {
        res.status(404).json({ message: 'Could not find the workout with given id' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update the workout' });
    });
  });
  
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Workout.removeWorkout(id)
    .then(deleted => {
        if (deleted) {
        res.json({ removed: deleted });
        } else {
        res.status(404).json({ message: 'Could not find workout with given id' });
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete workout' });
    });
});

module.exports = router;