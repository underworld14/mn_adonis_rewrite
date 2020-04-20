'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class RoomSchema extends Schema {
  up() {
    this.create('rooms', (table) => {
      table.increments();
      table.integer('hostel_id').unsigned().references('id').inTable('hostels');
      table.string('name', 100);
      table.timestamps();
    });
  }

  down() {
    this.drop('rooms');
  }
}

module.exports = RoomSchema;
