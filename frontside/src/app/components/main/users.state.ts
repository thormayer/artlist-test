import { User } from './../../models/users.model';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddUser, RemoveUser } from './main.actions';

export class UserStateModel {
    users: any
}

@State<User[]>({
    name: 'users', 
    // defaults: []
})

export class UserState {
    @Selector()
    static getUsers(state: UserStateModel) {
        return state.users
    }

    @Action(AddUser)
    add({getState, patchState}: StateContext<UserStateModel>, { payload }: AddUser) {
        const state = getState();
        patchState({
            users: 'users' in state ? [...state.users, payload] : [payload]
        })
    }

}
