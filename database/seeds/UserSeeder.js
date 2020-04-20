'use strict';

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory');
const Database = use('Database');

class UserSeeder {
  static async run() {
    await Database.table('users').insert([
      {
        teacher_id: 6,
        email: 'ilhamhadi@gmail.com',
        password: '$2a$10$0VOtlQmeyvyYoAgqxaAqFOMQNGiZA8hRbZ6up.4TPf18YGoiAKDx2',
        role: 'supervisor',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        teacher_id: 1,
        email: 'firman@gmail.com',
        password: '$2a$10$ODPMKQV1UPY7JvzaqfCQI.2W0t.fhwLSfNzFSqG4p6oubHboscpQO',
        role: 'admin',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        teacher_id: 5,
        email: 'naufaladam@gmail.com',
        password: '$2a$10$ODPMKQV1UPY7JvzaqfCQI.2W0t.fhwLSfNzFSqG4p6oubHboscpQO',
        role: 'admin',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  }
}

module.exports = UserSeeder;
