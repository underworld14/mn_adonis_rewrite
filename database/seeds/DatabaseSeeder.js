'use strict';

const TeacherSeeder = require('./source/TeacherSeeder');
const UserSeeder = require('./source/UserSeeder');
const ClassroomSeeder = require('./source/ClassroomSeeder');
const HostelSeeder = require('./source/HostelSeeder');
const RoomSeeder = require('./source/RoomSeeder');
const StudentSeeder = require('./source/StudentSeeder');

class DatabaseSeeder {
  async run() {
    // Put yours seeders in the desired order
    await TeacherSeeder.run();
    await UserSeeder.run();
    await ClassroomSeeder.run();
    await HostelSeeder.run();
    await RoomSeeder.run();
    await StudentSeeder.run();
  }
}

module.exports = DatabaseSeeder;
