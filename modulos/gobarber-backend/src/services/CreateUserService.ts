import { getRepository } from 'typeorm';

import { hash } from 'bcryptjs';

import User from '../models/User';

import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const existUser = await userRepository.findOne({ where: { email } });

    if (existUser) {
      throw new AppError('Email address alredy used!');
    }

    const passwordHash = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: passwordHash,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;