'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ClassroomSchema extends Schema {
  up() {
    this.create('classrooms', (table) => {
      table.increments();
      table.integer('teacher_id').unsigned().references('id').inTable('teachers');
      table.string('name', 100);
      table.string('place', 100);
      table.timestamps();
    });
  }

  down() {
    this.drop('classrooms');
  }
}

module.exports = ClassroomSchema;
