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
                                        v-model="name"
                                        placeholder="Enter your name"
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
                                        v-model="username"
                                        placeholder="Create username"
                                    />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label" for="email">Email</label>
                                <div class="control has-icons-left">
                                    <input
                                        class="input"
                                        type="email"
                                        id="email"
                                        v-model="email"
                                        placeholder="Enter your email"
                                    />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-envelope"></i>
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
                                        v-model="password"
                                        placeholder="Choose a Password"
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
                                        v-model="confirmPassword"
                                        placeholder="Confirm your password"
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
import { SignUpViewModel } from '../ViewModels/SignUpViewModel';
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
    setup() {
        const viewModel = new SignUpViewModel();

        const name = computed({
            get: () => viewModel.name,
            set: (value) => { viewModel.name = value; }
        });

        const username = computed({
            get: () => viewModel.username,
            set: (value) => { viewModel.username = value; }
        });

        const email = computed({
            get: () => viewModel.email,
            set: (value) => { viewModel.email = value; }
        });

        const password = computed({
            get: () => viewModel.password,
            set: (value) => { viewModel.password = value; }
        });

        const confirmPassword = computed({
            get: () => viewModel.confirmPassword,
            set: (value) => { viewModel.confirmPassword = value; }
        });

        const errorMessage = computed(() => viewModel.error);

        const signUp = async () => {
            if (password.value !== confirmPassword.value) {
                viewModel.error = 'Passwords do not match';
                return;
            }
            await viewModel.signUp();
        };

        return {
            name,
            username,
            email,
            password,
            confirmPassword,
            errorMessage,
            signUp
        };
    }
});
</script>

<style scoped>
.hero-body {
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
}

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
  box-shadow: none;           
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
