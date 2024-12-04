<template>
    <section class="tracker-section">
      <div class="container">
        <h1 class="title has-text-centered">Friends' Workouts</h1>
  
        <!-- Workouts Display -->
        <div class="columns is-multiline">
          <div v-for="(workout, index) in friendsWorkouts" :key="workout.id" class="column is-half">
            <div class="card social-card">
              <div class="card-content">
                <p class="title is-4">{{ workout.title }}</p>
                <p class="subtitle is-6">{{ workout.date }}</p>
                <p><strong>Duration:</strong> {{ workout.duration }} mins</p>
                <p><strong>Location:</strong> {{ workout.location }}</p>
                <p><strong>Type:</strong> {{ workout.type }}</p>
                <p><strong>Posted by:</strong> {{ workout.username }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        friendsWorkouts: [],
        userId: 1, // Replace with the actual user ID
      };
    },
    methods: {
      async fetchFriendsWorkouts() {
        try {
          console.log("Fetching friends' workouts...");
  
          // Fetch friends
          const friendsResponse = await fetch(`http://localhost:3000/friends/${this.userId}/friends`, {
            headers: { "Content-Type": "application/json" },
          });
          if (!friendsResponse.ok) throw new Error("Failed to fetch friends");
          const friends = await friendsResponse.json();
          console.log("Friends fetched:", friends);
  
          // Fetch friends' workouts
          for (const friendId of friends) {
            const friendWorkoutsResponse = await fetch(`http://localhost:3000/workouts?user_id=${friendId}`, {
              headers: { "Content-Type": "application/json" },
            });
            if (!friendWorkoutsResponse.ok) throw new Error("Failed to fetch friend's workouts");
            const friendWorkouts = await friendWorkoutsResponse.json();
            this.friendsWorkouts.push(...friendWorkouts);
          }
          console.log("Friends' workouts fetched:", this.friendsWorkouts);
        } catch (error) {
          console.error("Error fetching friends' workouts:", error);
        }
      },
    },
    mounted() {
      console.log("Component mounted");
      this.fetchFriendsWorkouts();
    },
  };
  </script>
  
  <style scoped>
  .social-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    color: #333;
  }
  
  .card {
    margin-bottom: 1.5rem;
  }
  
  .card-content {
    padding: 1rem;
  }
  
  .modal-card {
    width: 100%;
    max-width: 500px;
  }
  
  .button {
    border-radius: 8px;
  }
  
  .workout-label {
    margin-bottom: 1rem;
    color: black;
  }
  </style>