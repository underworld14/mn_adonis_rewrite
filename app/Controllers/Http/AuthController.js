'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use('App/Models/User');

/**
 * Resourceful controller for interacting with auths
 */
class AuthController {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async register({ request, auth, response }) {
    const body = request.only(['teacher_id', 'email', 'password', 'role']);

    const data = await User.create(body);
    const access_token = await auth.generate(data, { role: data.role });

    return response.status(201).json({ status: 'success', data, access_token });
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async login({ request, auth, response }) {
    const { email, password } = request.only(['email', 'password']);

    const user = await User.findByOrFail('email', email);
    const access_token = await auth.attempt(email, password, { role: user.role });

    return response.status(201).json({ status: 'success', data: { user, access_token } });
  }

  async getMe({ request, auth, response }) {
    const user = await auth.getUser();
    if (!user) {
      return response.status(400).json({ status: 'error', message: 'invalid user' });
    }
    const data = await User.query().where('id', user.id).with('teachers').fetch();
    return response.json({ status: 'success', data });
  }
}

module.exports = AuthController;
