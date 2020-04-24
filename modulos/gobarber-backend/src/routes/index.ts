import { Router, json } from 'express';
import appointmenstsReouter from './appointments.routes';

const routes = Router();

routes.use(json());
routes.use('/appointments', appointmenstsReouter);

export default routes;
