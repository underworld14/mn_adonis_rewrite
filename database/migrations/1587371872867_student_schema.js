'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class StudentSchema extends Schema {
  up() {
    this.create('students', (table) => {
      table.increments();
      table.integer('classroom_id').unsigned().references('id').inTable('classrooms');
      table.integer('room_id').unsigned().references('id').inTable('rooms');
      table.integer('nis');
      table.string('name', 100);
      table.string('birthplace', 50);
      table.date('birthdate');
      table.string('guardian', 100);
      table.string('district', 50);
      table.string('address', 255);
      table.string('phone', 14);
      table.timestamps();
    });
  }

  down() {
    this.drop('students');
  }
}

module.exports = StudentSchema;
