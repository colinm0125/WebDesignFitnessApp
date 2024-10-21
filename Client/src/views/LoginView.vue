<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-third">
            <div class="box">
              <!-- Login Heading -->
              <h1 class="title has-text-centered">Login</h1>
              
              <!-- Login Form -->
              <form @submit.prevent="login">
                <!-- Username Field -->
                <div class="field">
                  <label class="label" for="username">Username</label>
                  <div class="control has-icons-left">
                    <input
                      class="input"
                      type="text"
                      id="username"
                      v-model="username"
                      placeholder="Enter your username"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                </div>

                <!-- Password Field -->
                <div class="field">
                  <label class="label" for="password">Password</label>
                  <div class="control has-icons-left">
                    <input
                      class="input"
                      type="password"
                      id="password"
                      v-model="password"
                      placeholder="Enter your password"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </div>
                </div>

                <!-- Login Button -->
                <div class="field">
                  <div class="control">
                    <button class="button is-primary is-fullwidth">Login</button>
                  </div>
                </div>


                <!--Redirect To SignUp page-->
                <div class="field">
                  <div class="control">
                    <p>Don't have an account?</p>
                    <router-link to="/signup" >Sign Up</router-link>
                  </div>
                </div>

                <!-- Error Message -->
                <p v-if="errorMessage" class="help is-danger has-text-centered">
                  {{ errorMessage }}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { LoginViewModel } from '../ViewModels/LoginViewModel';

export default defineComponent({
  data() {
    return {
      viewModel: new LoginViewModel(),
    };
  },
  computed: {
    username: {
      get() {
        return this.viewModel.username;
      },
      set(value: string) {
        this.viewModel.username = value;
      },
    },
    password: {
      get() {
        return this.viewModel.password;
      },
      set(value: string) {
        this.viewModel.password = value;
      },
    },
    errorMessage() {
      return this.viewModel.error;
    },
  },
  methods: {
    login() {
      this.viewModel.login();
    },
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
