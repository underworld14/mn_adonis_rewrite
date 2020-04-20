'use strict';

/*
|--------------------------------------------------------------------------
| StudentSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database');
const mock = require('./student');

let mockData = mock.map((val) => {
  return {
    ...val,
    birthdate: val.birthdate ? new Date(val.birthdate) : null,
    created_at: new Date(),
    updated_at: new Date(),
  };
});

class StudentSeeder {
  static async run() {
    await Database.table('students').insert(mockData);
  }
}

module.exports = StudentSeeder;
