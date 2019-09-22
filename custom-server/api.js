const Router = require('koa-router');
const api = new Router({ prefix: '/api' });
const authController = require( './koa/controllers/auth-controller' );

api.get('/', async context => {
  context.body = 'api';
});

api.get('/ping', async context => {
  context.body = 'pong';
});

api.get('/query-playground', async context => {
    const num = context.query.num;
    context.body = { result: Math.pow( num, 2 ) };
} );

api.get('/auth/register', authController.register);
api.get('/auth/login', authController.login);

module.exports = api;