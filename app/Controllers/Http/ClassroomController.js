'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Classroom = use('App/Models/Classroom');
const Database = use('Database');

/**
 * Resourceful controller for interacting with classrooms
 */
class ClassroomController {
  /**
   * Show a list of all classrooms.
   * GET classrooms
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response }) {
    const data = await Classroom.query().with('teachers').fetch();

    return response.json({ status: 'success', data });
  }

  /**
   * Create/save a new classroom.
   * POST classrooms
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    console.log('hello route');
    const body = request.only(['teacher_id', 'name', 'place']);

    const data = await Classroom.create(body);

    return response.status(201).json({ status: 'success', data });
  }

  /**
   * Display a single classroom.
   * GET classrooms/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const data = await Classroom.findOrFail(params.id);

    return response.status(200).json({ status: 'success', data });
  }

  /**
   * Update classroom details.
   * PUT or PATCH classrooms/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const updateData = request.only(['teacher_id', 'name', 'place']);
    await Classroom.query().where('id', params.id).update(updateData);

    return response.status(201).json({ status: 'success' });
  }

  /**
   * Delete a classroom with id.
   * DELETE classrooms/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const data = await Classroom.findOrFail(params.id);
    await data.delete();

    return response.status(201).json({ status: 'success', data: data.id });
  }
}

module.exports = ClassroomController;
