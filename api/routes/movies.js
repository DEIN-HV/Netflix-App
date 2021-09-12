const Movie = require("../models/Movie");
const verify = require("../verifyToken");

const router = require("express").Router();

//CREATE
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body);
        try {
            const saveMovie = await newMovie.save();
            res.status(201).json(saveMovie);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    else
        res.status(403).json("You are not allowed!")
})

//UPDATE
router.put("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updateMovie = await Movie.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(201).json(updateMovie);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    else
        res.status(403).json("You are not allowed!")
})

//DELETE
router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Movie.findByIdAndDelete(req.params.id);
            res.status(201).json("movies has deleted");
        } catch (error) {
            res.status(500).json(error);
        }
    }
    else
        res.status(403).json("You are not allowed!")
})

//GET
router.get("/find/:id", verify, async (req, res) => {

    try {
        const movie = await Movie.findById(req.params.id);
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json(error);
    }
});

//RANDOM
router.get("/random", verify, async (req, res) => {
    const type = req.query.type;
    let movie

    try {

        if (type === "series") {
            movie = await Movie.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } }
            ]);
        }

        else {
            movie = await Movie.aggregate([
                { $match: { isSeries: false } },
                { $sample: { size: 1 } }
            ]);
        }
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json(error);
    }
});

//GET ALL
router.get("/", async (req, res) => {

    try {
        const movie = await Movie.find();
        res.status(201).json(movie.reverse());
    } catch (error) {
        res.status(500).json(error);
    }
})



module.exports = router;