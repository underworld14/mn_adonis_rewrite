'use strict';

const TeacherSeeder = require('./TeacherSeeder');
const UserSeeder = require('./UserSeeder');
const ClassroomSeeder = require('./ClassroomSeeder');
const HostelSeeder = require('./HostelSeeder');
const RoomSeeder = require('./RoomSeeder');

class DatabaseSeeder {
  async run() {
    // Put yours seeders in the desired order
    await TeacherSeeder.run();
    await UserSeeder.run();
    await ClassroomSeeder.run();
    await HostelSeeder.run();
    await RoomSeeder.run();
  }
}

module.exports = DatabaseSeeder;
