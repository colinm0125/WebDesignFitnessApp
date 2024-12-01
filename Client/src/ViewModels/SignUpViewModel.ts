import { reactive } from "vue";

export class SignUpViewModel {
    public state: {
        name: string,
        email: string,
        password: string,
        confirmPassword: string,
        error: string
    }
    
    
    constructor() {
        this.state = reactive({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            error: ""
        });
    }

    get name() {
        return this.state.name;
    }
    set name(value) {
        this.state.name = value;
    }

    get email() {
        return this.state.email;
    }
    set email(value) {
        this.state.email = value;
    }

    get password() {
        return this.state.password;
    }
    set password(value) {
        this.state.password = value;
    }

    get confirmPassword() {
        return this.state.confirmPassword;
    }
    set confirmPassword(value) {
        this.state.confirmPassword = value;
    }

    get error() {
        return this.state.error;
    }
    set error(value) {
        this.state.error = value;
    }

    async signUp() {
        try {
            const response = await fetch("http://localhost:5000/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                    confirmPassword: this.state.confirmPassword
                })
            });
            if (response.ok) {
                this.error = "";
                alert("User created successfully");
                return true;
            } else {
                const data = await response.json();
                this.error = data.message;
                return false;
            }
        } catch (error) {
            this.error = String(error);
            return false;
        }
    }
}