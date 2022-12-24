// Import the User and UserFavorite class.
const User = require("./User")
const UserFavorite = require("./UserFavorite")

User.hasMany(UserFavorite, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

UserFavorite.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, UserFavorite }
