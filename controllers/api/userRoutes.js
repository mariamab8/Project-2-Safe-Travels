// Import the Express router.
const router = require("express").Router()

// Import the User model.
const { User, UserFavorite } = require("../../models")

// GET /api/users route (get all users).
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: [
        "user_id",
        "first_name",
        "last_name",
        "email",
      ],
    })
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json(err)
  }
})

// GET /api/users/:id route (get a user).
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({
      attributes: [
        "user_id",
        "first_name",
        "last_name",
        "email",
      ],
      where: {
        "user_id": req.params.id,
      },
    })
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
})

// POST /api/users (add a user).
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
})

// GET /api/users/:id/favorites (get a user’s favorites)
router.get("/:id/favorites", async (req, res) => {
  try {
    const userFavorites = await UserFavorite.findAll({
      attributes: [
        "favorite",
      ],
      where: {
        "user_id": req.params.id,
      },
    })
    res.status(200).json(userFavorites)
  } catch (err) {
    res.status(500).json(err)
  }
})

// POST /api/users/:id/favorites (add a user’s favorites)
router.post("/:id/favorites", async (req, res) => {
  try {
    const favorites = []
    req.body.forEach((favorite) => {
      favorites.push({
        user_id: req.params.id,
        favorite: favorite,
      })
    })
    const userFavorites = await UserFavorite.bulkCreate(favorites)
    res.status(200).json(userFavorites)
  } catch (err) {
    res.status(500).json(err)
  }
})

// DELELTE /api/users/:id/favorites (delete a user’s favorites)
router.delete("/:id/favorites", async (req, res) => {
  try {
    console.log("DELETE /api/users/:id/favorites!")
    res.status(200).json("DELETE /api/users/:id/favorites!")
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
