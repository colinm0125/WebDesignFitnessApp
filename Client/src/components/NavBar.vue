<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

// Reactive state for the menu
const isOpen = ref(false);

// Reactive state for the logged-in user
const loggedInUser = ref(null);

// Check for logged-in user from localStorage
onMounted(() => {
  const storedUser = localStorage.getItem('loggedInUser');
  if (storedUser) {
    loggedInUser.value = JSON.parse(storedUser);
  }
});

// Logout function
const router = useRouter();
const logout = () => {
  localStorage.removeItem('loggedInUser');
  loggedInUser.value = null;
  router.push('/login');
};
</script>

<template>
  <nav class="navbar is-white" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          :class="{ 'is-active': isOpen }"
          @click="isOpen = !isOpen"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': isOpen }">
        <div class="navbar-start">
          <RouterLink to="/" class="navbar-item"> Home </RouterLink>
          <RouterLink to="/about" class="navbar-item"> About </RouterLink>
          <RouterLink to="/workout-tracker" class="navbar-item"> Tracker </RouterLink>
          <RouterLink to="/friends" class="navbar-item"> Friends </RouterLink>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> More </a>

            <div class="navbar-dropdown">
              <RouterLink to="/admin" class="navbar-item"> Admin </RouterLink>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-light">
                <RouterLink to="/signup"> Sign Up </RouterLink>
              </a>

              <template v-if="loggedInUser">
                <a class="button is-primary">
                  <RouterLink to="/dashboard"> Dashboard </RouterLink>
                </a>
                <a class="button is-light" @click="logout"> Logout </a>
              </template>

              <template v-else>
                <a class="button is-light">
                  <RouterLink to="/login"> Log in </RouterLink>
                </a>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid blue;
}
</style>
