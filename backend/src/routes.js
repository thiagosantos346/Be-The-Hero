const express = require('express');
const OngController = require('./controlles/OngController');
const IncidentController = require('./controlles/IncidentsController');
const ProfileController = require('./controlles/ProfileController');
const SessionController = require('./controlles/SessionController');
const routes = express.Router();

routes.post('/session', SessionController.create )
routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete );

routes.get('/profile', ProfileController.index);

module.exports = routes;