// require mongoose
const mongoose = require("mongoose");
// Create Schema "Be creative and have fun!"
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "What exercise type are you looking to do?",
            },
            name: {
                type: String,
                trim: true,
                required: "What's the exercise name?",
            },
            duration: {
                type: Number,
                required: "How long will your exercise be for (use mins)",
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: String,
            },
            distance: {
                type: Number,
            },
        },
    ],
},

);
const Workout = mongoose.model("Workout", workoutSchema);

//export Workout
module.exports = Workout;