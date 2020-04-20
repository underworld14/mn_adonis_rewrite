'use strict';

/*
|--------------------------------------------------------------------------
| RoomSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database');

class RoomSeeder {
  static async run() {
    await Database.table('rooms').insert([
      {
        hostel_id: 1,
        name: '101',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        hostel_id: 1,
        name: '102',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        hostel_id: 2,
        name: '101',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        hostel_id: 2,
        name: '102',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        hostel_id: 3,
        name: '101',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        hostel_id: 3,
        name: '102',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        hostel_id: 4,
        name: '101',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        hostel_id: 4,
        name: '102',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        hostel_id: 5,
        name: '101',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        hostel_id: 5,
        name: '102',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  }
}

module.exports = RoomSeeder;
