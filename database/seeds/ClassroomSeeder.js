'use strict';

/*
|--------------------------------------------------------------------------
| ClassroomSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database');

class ClassroomSeeder {
  static async run() {
    await Database.table('classrooms').insert([
      {
        teacher_id: 1,
        name: '1A',
        place: 'New Building',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        teacher_id: 2,
        name: '1B',
        place: 'New Building',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        teacher_id: 3,
        name: '2A',
        place: 'New Building',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        teacher_id: 4,
        name: '2B',
        place: 'New Building',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        teacher_id: 5,
        name: '3A',
        place: 'New Building',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        teacher_id: 6,
        name: '3B',
        place: 'New Building',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  }
}

module.exports = ClassroomSeeder;
