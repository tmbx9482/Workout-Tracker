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
                required: "How much weight can you handle during this exercise?"
            },
            reps: {
                type: Number,
                required: "How many reps are you seeking in this exercise",
                default: "8 , 10, 12, 15"
            },
            sets: {
                type: String,
                required: "How many sets are you looking to acheive?",
                default: "3X12, 4X10, 5X5"
            },
            distance: {
                type: Number,
                require: "If so, how far did you travel?"
            },
        },
    ],
},

);
const Workout = mongoose.model("Workout", workoutSchema);

//export Workout
module.exports = Workout;