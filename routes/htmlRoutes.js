//reguire express and path
const router = require("express").Router();
const path = require("path");


// The root to Webpage
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// All the exercises
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// workingout in progress states
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// Exporting the router

module.exports = router;