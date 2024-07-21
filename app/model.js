import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite3'
});

export class Profile extends Sequelize.Model {}
Profile.init(
  {
    githubHandle: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    markdown: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    uuid: {
      type: Sequelize.STRING,
      allowNull: false
    },
    domain: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Profile'
  }
);

