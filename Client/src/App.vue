<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

body {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  background-color: whitesmoke;
  color: black;
}
</style>
