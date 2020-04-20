'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

// welcome home pages
Route.on('/').render('welcome');

// api service
Route.group(() => {
  // root api
  Route.get('/', () => 'api service madinatunnajah');

  // auth controller
  Route.post('/auth/login', 'AuthController.login');
  Route.post('/auth/register', 'AuthController.register');
  Route.get('/auth/getme', 'AuthController.getMe').middleware(['auth']);

  // classroom routes
  Route.get('/classroom', 'ClassroomController.index');
  Route.post('/classroom', 'ClassroomController.store');
  Route.get('/classroom/:id', 'ClassroomController.show');
  Route.patch('/classroom/:id', 'ClassroomController.update');
  Route.delete('/classroom/:id', 'ClassroomController.destroy');
})
  .prefix('/api/v1')
  .formats(['json']);
