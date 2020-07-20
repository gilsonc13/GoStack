import { Router } from 'express';

import multer from 'multer';
import CreateUserService from '../services/CreateUserService';
import UpadateUserAvatarService from '../services/UpdateUserAvatarService';

import ensureAuthentication from '../middlewares/ensureAuthenticated';

import uploadConfig from '../config/upload';

const usersRouter = Router();

const upload = multer(uploadConfig);

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const userService = new CreateUserService();

  const user = await userService.execute({
    name,
    email,
    password,
  });

  delete user.password;

  return response.json(user);
});

usersRouter.patch(
  '/avatar',
  ensureAuthentication,
  upload.single('avatar'),
  async (request, response) => {
    const upadateAvatar = new UpadateUserAvatarService();

    const user = await upadateAvatar.execute({
      user_id: request.user.id,
      avatarFileName: request.file.filename,
    });

    delete user.password;
    response.json({ user });
  },
);

export default usersRouter;