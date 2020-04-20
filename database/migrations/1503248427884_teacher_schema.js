'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TeacherSchema extends Schema {
  up() {
    this.create('teachers', (table) => {
      table.increments();
      table.integer('nip');
      table.string('name', 100).notNullable();
      table.string('room', 50);
      table.string('position', 50);
      table.string('photo ', 255);
      table.string('phone ', 14);
      table.timestamps();
    });
  }

  down() {
    this.drop('teachers');
  }
}

module.exports = TeacherSchema;
