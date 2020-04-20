'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class HostelSchema extends Schema {
  up() {
    this.create('hostels', (table) => {
      table.increments();
      table.integer('teacher_id').unsigned().references('id').inTable('teachers');
      table.string('name', 100);
      table.timestamps();
    });
  }

  down() {
    this.drop('hostels');
  }
}

module.exports = HostelSchema;
