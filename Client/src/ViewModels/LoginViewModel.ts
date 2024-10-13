import {UserModel} from '../models/UserModel';

export class LoginViewModel {
    public username: string = '';
    public password: string = '';
    public error: string = '';

    login() {
        UserModel.login(this.username, this.password)
            .then((response) => {
                if (response.success) {
                    this.error = '';
                    // redirect to home
                } else {
                    this.error = response.message;
                }
            });
    }
}