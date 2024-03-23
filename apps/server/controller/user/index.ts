import { test } from './handlers/test';

class UserController {
  test = test;
}

export const userController = new UserController();
