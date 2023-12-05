const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const workoutRouter = express.Router();

workoutRouter.route("/").get(getWorkouts).post(createWorkout);

// : represents a parameter which can change
workoutRouter
  .route("/:id")
  .get(getWorkout)
  .patch(updateWorkout)
  .delete(deleteWorkout);

module.exports = workoutRouter;
