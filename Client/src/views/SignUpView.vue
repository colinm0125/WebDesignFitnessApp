<template>
    <section class="section">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-one-third">
                    <div class="box">
                        <h1 class="title has-text-centered">Sign Up</h1>
                        <form @submit.prevent="signUp">

                            <div class="field">
                                <label class="label" for="name">Name</label>
                                <div class="control has-icons-left">
                                    <input
                                        class="input"
                                        type="text"
                                        id="name"
                                        v-model="user.name"
                                        placeholder="Enter your name"
                                        required
                                    />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label" for="username">Username</label>
                                <div class="control has-icons-left">
                                    <input
                                        class="input"
                                        type="text"
                                        id="username"
                                        v-model="user.username"
                                        placeholder="Create username"
                                        required
                                    />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label" for="password">Password</label>
                                <div class="control has-icons-left">
                                    <input
                                        class="input"
                                        type="password"
                                        id="password"
                                        v-model="user.password"
                                        placeholder="Choose a password"
                                        required
                                    />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-lock"></i>
                                    </span>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label" for="confirmPassword">Confirm Password</label>
                                <div class="control has-icons-left">
                                    <input
                                        class="input"
                                        type="password"
                                        id="confirmPassword"
                                        v-model="user.confirmPassword"
                                        placeholder="Confirm your password"
                                        required
                                    />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-lock"></i>
                                    </span>
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <button class="button is-primary is-fullwidth">Sign Up</button>
                                </div>
                            </div>

                            <p v-if="errorMessage" class="help is-danger">{{ errorMessage }}</p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

interface User {
    name: string;
    username: string;
    password: string;
    confirmPassword: string;
}

export default defineComponent({
    setup() {
        const user = reactive<User>({
            name: '',
            username: '',
            password: '',
            confirmPassword: '',
        });

        const errorMessage = ref<string>('');
        const router = useRouter();

        const signUp = async () => {
            if (user.password !== user.confirmPassword) {
                errorMessage.value = 'Passwords do not match';
                return;
            }

            try {
                const response = await fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: user.name,
                        username: user.username,
                        password: user.password,
                        role: 'user',
                    }),
                });

                if (!response.ok) {
                    throw new Error('Failed to sign up. Please try again.');
                }

                const newUser = await response.json();

                // Save the logged-in user in localStorage
                localStorage.setItem('loggedInUser', JSON.stringify(newUser));

                // Redirect to the home page
                router.push('/');
            } catch (error: any) {
                errorMessage.value = error.message;
            }
        };

        return {
            user,
            errorMessage,
            signUp,
        };
    },
});
</script>

<style scoped>
.box {
  padding: 2rem;
  border-radius: 8px;
  background-color: white; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
  color: #4a4a4a; 
}

.input {
  background-color: #f9f9f9; 
  color: #4a4a4a;            
  border: 1px solid #ddd;     
  border-radius: 5px;         
}

.input::placeholder {
  color: gray; 
}

.button {
  margin-top: 1rem;
  border-radius: 5px;
}

.help {
  margin-top: 1rem;
  color: #ff3860; 
}

.icon.is-left {
  color: #4a4a4a; 
}

.label {
  color: #4a4a4a; 
}
</style>
