import { Router } from 'express';
import SessionsConstroller from '../controllers/SessionsControllers';

const sessionsRouter = Router();
const SessionsController = new SessionsConstroller();

sessionsRouter.post('/', SessionsController.create);

export default sessionsRouter;
