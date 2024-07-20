const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite3'
});

class Profile extends Sequelize.Model {}
Profile.init(
  {
    githubHandle: {
      type: Sequelize.STRING,
      allowNull: false
    },
    markdown: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  }
);

module.exports = {
  Profile
};

