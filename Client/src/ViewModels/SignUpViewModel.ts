export class SignUpViewModel {
    public username: string = '';
    public password: string = '';
    public confirmPassword: string = '';
    public error: string = '';
    public success: string = '';
    public email: string = ''; 

    signUp() {
        
        if (this.username === '' || this.password === '' || this.confirmPassword === '') {
            this.error = 'Please fill in all fields';
            return;
        }
        
        if (this.password !== this.confirmPassword) {
            this.error = 'Passwords do not match';
            return;
        }

        //simulate successful sign up, will change with backend implementation
        alert('Sign up successful (FAKE!)');
        this.error='';
       
    }

    
}