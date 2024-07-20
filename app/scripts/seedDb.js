import { Profile } from '../model.js';

/* WARNING THIS WILL DROP THE CURRENT DATABASE */
seed();

async function seed() {
  // create tables
  await Profile.sync({ force: true });
}
