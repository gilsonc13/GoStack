import { Router, json } from 'express';
import appointmenstsReouter from './appointments.routes';
import usersReouter from './users.routes';

const routes = Router();

routes.use(json());
routes.use('/appointments', appointmenstsReouter);
routes.use('/users', usersReouter);

export default routes;
