<template>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-third">
            <div class="box">
              <h1 class="title has-text-centered">Login</h1>
              <form @submit.prevent="login">
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
  
                <div class="field">
                  <div class="control">
                    <button class="button is-primary is-fullwidth">Login</button>
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
  /* Custom styling to adjust margins and spacing */
  .box {
    padding: 2rem;
  }
  
  .title {
    margin-bottom: 1rem;
  }
  
  .button {
    margin-top: 1rem;
  }
  
  .help {
    margin-top: 1rem;
  }
  </style>
  