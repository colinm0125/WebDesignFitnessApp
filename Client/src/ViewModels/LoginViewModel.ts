import { UserModel } from '../models/UserModel';

export class LoginViewModel {
    public username: string = '';
    public password: string = '';
    public error: string = '';

    async login() {
        try {
            console.log('Attempting to login with:', { username: this.username, password: this.password });
            const response = await UserModel.login(this.username, this.password);
            if (response.success) {
                this.error = '';
                localStorage.setItem('token', response.token);
                // Redirect to home or another page
            } else {
                this.error = response.message;
            }
        } catch (error) {
            this.error = 'Error connecting to the server';
            console.error('Login error:', error);
        }
    }
}