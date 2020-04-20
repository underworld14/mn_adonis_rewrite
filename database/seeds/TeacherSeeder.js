'use strict';

/*
|--------------------------------------------------------------------------
| TeacherSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database');

class TeacherSeeder {
  static async run() {
    await Database.table('teachers').insert([
      {
        id: 1,
        nip: 123213,
        name: 'Muhammad Firman',
        room: 'Saudi',
        phone: '1234567890',
        position: 'Bps & Market',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        nip: 32432423,
        name: 'Jarir Oktajab',
        room: 'BPS',
        phone: '1234567890',
        position: 'Art Section',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        nip: 32823984,
        name: 'Muhammad Rizki',
        room: 'BPS',
        phone: '1234567890',
        position: 'BPS',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        nip: 321312,
        name: 'Muhamad Adriansyah',
        room: 'BPS',
        phone: '1234567890',
        position: 'BPS',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        nip: 123213,
        name: 'Naufal Adam Fadillah',
        room: 'BPS',
        phone: '1234567890',
        position: 'BPS',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        nip: 3242365,
        name: 'Ilham Hadiwijaya',
        room: 'BPS',
        phone: '1234567890',
        position: 'BPS',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        nip: 183213129,
        name: 'M Raihan',
        room: 'BPS',
        phone: '1234567890',
        position: 'BPS',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  }
}

module.exports = TeacherSeeder;
