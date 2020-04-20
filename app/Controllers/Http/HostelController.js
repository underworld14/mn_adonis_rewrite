'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Hostel = use('App/Models/Hostel');
/**
 * Resourceful controller for interacting with hostels
 */
class HostelController {
  /**
   * Show a list of all hostels.
   * GET hostels
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response }) {
    const data = await Hostel.query()
      .with('teachers', (builder) => {
        builder.setVisible(['id', 'name']);
      })
      .fetch();

    return response.json({ status: 'success', data });
  }

  /**
   * Create/save a new hostel.
   * POST hostels
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const body = request.only(['teacher_id', 'name']);

    const data = await Hostel.create(body);
    return response.status(201).json({ status: 'success', data });
  }

  /**
   * Display a single hostel.
   * GET hostels/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const data = await Hostel.query().where('id', params.id).with('teachers').fetch();

    return response.status(200).json({ status: 'success', data });
  }

  /**
   * Update hostel details.
   * PUT or PATCH hostels/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const body = request.only(['teacher_id', 'name']);
    await Hostel.query().where('id', params.id).update(body);

    return response.status(201).json({ status: 'success' });
  }

  /**
   * Delete a hostel with id.
   * DELETE hostels/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const data = await Hostel.findOrFail(params.id);
    await data.delete();

    return response.status(201).json({ status: 'success', data: data.id });
  }
}

module.exports = HostelController;
