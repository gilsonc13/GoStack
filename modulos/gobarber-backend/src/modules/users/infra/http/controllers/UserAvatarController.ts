import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpadateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

export default class UsersAvatarConstroller {
  public async update(request: Request, response: Response): Promise<Response> {
    const upadateAvatar = container.resolve(UpadateUserAvatarService);

    const user = await upadateAvatar.execute({
      user_id: request.user.id,
      avatarFileName: request.file.filename,
    });

    delete user.password;

    return response.json({ user });
  }
}
