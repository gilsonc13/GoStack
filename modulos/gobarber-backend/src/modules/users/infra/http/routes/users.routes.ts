import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import ensureAuthentication from '../middlewares/ensureAuthenticated';
import UsersConstroller from '../controllers/UsersController';
import UserAvatarConstroller from '../controllers/UserAvatarController';

const usersRouter = Router();
const upload = multer(uploadConfig);
const usersController = new UsersConstroller();
const userAvatarController = new UserAvatarConstroller();

usersRouter.post('/', usersController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthentication,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRouter;
