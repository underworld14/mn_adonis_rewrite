'use strict';

/*
|--------------------------------------------------------------------------
| HostelSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database');

class HostelSeeder {
  static async run() {
    await Database.table('hostels').insert([
      {
        id: 1,
        teacher_id: 1,
        name: 'Indonesia',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        teacher_id: 2,
        name: 'Saudi',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        teacher_id: 3,
        name: 'Makkah',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        teacher_id: 4,
        name: 'Syiria',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        teacher_id: 5,
        name: 'Sudan',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  }
}

module.exports = HostelSeeder;
