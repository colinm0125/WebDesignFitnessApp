<template>
    <section class="dashboard-section">
      <div class="container">
        <div v-if="user">
          <h1 class="title">Welcome, {{ user.name }}!</h1>
          <p class="subtitle"><strong>Role:</strong> {{ user.role }}</p>
  
          <h2 class="subtitle mt-5">Your Activities</h2>
          <div class="columns is-multiline">
            <div
              v-for="(activity, index) in user.activities"
              :key="index"
              class="column is-one-third"
            >
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img
                      :src="activity.picture || 'https://picsum.photos/seed/weights/600/400'"
                      :alt="activity.title"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <p class="title is-5">{{ activity.title }}</p>
                  <p>{{ activity.date }}</p>
                  <p><strong>Duration:</strong> {{ activity.duration }} mins</p>
                  <p><strong>Location:</strong> {{ activity.location || 'N/A' }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div v-else>
          <p class="help is-danger has-text-centered">
            User data not found. Please <router-link to="/login">log in again</router-link>.
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: null, // Store the logged-in user data
      };
    },
    mounted() {
      const user = localStorage.getItem('loggedInUser');
      if (user) {
        this.user = JSON.parse(user);
      } else {
        this.$router.push('/login'); // Redirect to login if not authenticated
      }
    },
  };
  </script>
  
  <style scoped>
  .dashboard-section {
    min-height: 100vh;
    background-color: #f5f5f5; /* Light gray background */
    padding: 2rem;
  }
  
  .card {
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Card shadow */
    margin-bottom: 2rem;
  }
  
  .card-content {
    padding: 1.5rem;
  }
  
  .image img {
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }
  
  .title {
    color: #333;
  }
  </style>
  