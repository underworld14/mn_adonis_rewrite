'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Teacher extends Model {
  classrooms() {
    return this.hasOne('App/Models/Classroom');
  }
}

module.exports = Teacher;
