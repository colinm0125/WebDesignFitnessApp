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
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();
    const username = ref('');
    const password = ref('');
    const errorMessage = ref('');

    const login = async () => {
      try {
        console.log('Attempting to login with:', { username: username.value, password: password.value });

        const response = await fetch('http://localhost:3000/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: username.value, password: password.value }),
        });

        const data = await response.json();

        if (!response.ok) {
          errorMessage.value = data.error;
          console.error('Login error:', data.error);
          return;
        }

        localStorage.setItem('token', data.token);
        router.push('/workout-tracker');
      } catch (error) {
        errorMessage.value = 'Error connecting to the server';
        console.error('Login error:', error);
      }
    };

    return {
      username,
      password,
      errorMessage,
      login,
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