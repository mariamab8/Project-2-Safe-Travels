// Import the User, UserFavorite, and City class.
const User = require("./User")
const UserFavorite = require("./UserFavorite")
const City = require("./City")

User.hasMany(UserFavorite, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

UserFavorite.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, UserFavorite, City }
