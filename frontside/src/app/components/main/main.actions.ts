

import { User } from '../../models/users.model';

export class AddUser {
  static readonly type = '[User] Add';
  constructor(public payload: User) {}
}

export class RemoveUser {
    static readonly type = '[User] Add';
    constructor(public payload: User) {}
}