<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
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
                      v-model="password"
                      placeholder="Enter your password"
                      required
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

                <div class="field">
                  <div class="control">
                    <p>Don't have an account?</p>
                    <router-link to="/signup">Sign Up</router-link>
                  </div>
                </div>

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

export default defineComponent({
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    // Login method to validate user credentials from localStorage
    login() {
      const storedUsers = localStorage.getItem('users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      // Find the user by matching username and password
      const user = users.find(
        (u: any) => u.username === this.username && u.password === this.password
      );

      if (user) {
        // Store the logged-in user in localStorage to maintain session
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        this.$router.push('/dashboard'); // Redirect to dashboard
      } else {
        this.errorMessage = 'Invalid username or password';
      }
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
