<template>
    <section class="tracker-section">
      <div class="container">
        <h1 class="title has-text-centered">Friends' Workouts</h1>
  
        <!-- Bulma Columns for 3 Cards per Row -->
        <div class="columns is-multiline">
          <div
            v-for="(friend, friendIndex) in friends"
            :key="friend.id"
            class="column is-one-third"
          >
            <div class="card social-card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img :src="friend.profilePicture" :alt="friend.name" class="is-rounded" />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-5">{{ friend.name }}</p>
                  </div>
                </div>
              </div>
  
              <!-- Loop through Friend's Workouts -->
              <div
                v-for="(workout, workoutIndex) in friend.workouts"
                :key="workoutIndex"
                class="card workout-card"
              >
                <div class="card-image" v-if="workout.picture">
                  <figure class="image">
                    <img :src="workout.picture" :alt="workout.title" />
                  </figure>
                </div>
  
                <div class="card-content displayed-activity">
                  <p class="title is-4">{{ workout.title || 'Untitled Workout' }}</p>
                  <p class="subtitle is-6">{{ workout.date || 'No Date Provided' }}</p>
                  <p class="workout-card-title">
                    <strong>Duration:</strong> {{ workout.duration || 'N/A' }} mins
                  </p>
                  <p class="workout-card-title">
                    <strong>Location:</strong> {{ workout.location || 'N/A' }}
                  </p>
                  <p class="workout-card-title">
                    <strong>Type:</strong> {{ workout.type || 'N/A' }}
                  </p>
  
                  <!-- Like Button -->
                  <button class="button is-light" @click="likeWorkout(friendIndex, workoutIndex)">
                    ❤️ Like ({{ workout.likes }})
                  </button>
  
                  <!-- Comment Section -->
                  <div class="comments mt-3">
                    <h3 class="subtitle is-6">Comments</h3>
                    <ul>
                      <li
                        v-for="(comment, commentIndex) in workout.comments"
                        :key="commentIndex"
                      >
                        <strong>{{ comment.user }}:</strong> {{ comment.text }}
                      </li>
                    </ul>
  
                    <!-- Add Comment Form -->
                    <form @submit.prevent="addComment(friendIndex, workoutIndex)">
                      <div class="field">
                        <div class="control">
                          <input
                            class="input"
                            type="text"
                            v-model="workout.newComment"
                            placeholder="Add a comment..."
                            required
                          />
                        </div>
                      </div>
                      <button class="button is-primary" type="submit">Post</button>
                    </form>
                  </div>
                </div>
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
        friends: [], // Friend's data array
      };
    },
    methods: {
      async fetchFriends() {
        try {
          const response = await fetch('/src/assets/friends.json');
          const data = await response.json();
  
          // Initialize likes, comments, and newComment for each workout
          this.friends = data.map(friend => ({
            ...friend,
            workouts: friend.workouts.map(workout => ({
              ...workout,
              likes: 0, // Initialize likes to 0
              comments: [], // Initialize empty comments array
              newComment: '', // Initialize individual comment input
            })),
          }));
        } catch (error) {
          console.error('Error fetching friends:', error);
        }
      },
  
      likeWorkout(friendIndex, workoutIndex) {
        const workout = this.friends[friendIndex].workouts[workoutIndex];
        workout.likes = workout.likes ? 0 : 1; // Toggle like/unlike
      },
  
      addComment(friendIndex, workoutIndex) {
        const workout = this.friends[friendIndex].workouts[workoutIndex];
  
        if (!workout.newComment.trim()) return;
  
        workout.comments.push({
          user: 'You', // Mock user
          text: workout.newComment.trim(),
        });
  
        workout.newComment = ''; 
      },
    },
    mounted() {
      this.fetchFriends();
    },
  };
  </script>
  
  <style scoped>
  .tracker-section {
    min-height: 100vh;
    background-color: #f5f5f5;
    padding: 2rem;
  }
  
  .columns.is-multiline {
    gap: 1.5rem; 
  }
  
  .social-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    margin-bottom: 2rem;
  }
  
  .workout-card {
    margin-top: 1rem;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  .card-image img {
    object-fit: cover;
    width: 100%;
    height: 200px;
  }
  
  .media {
    align-items: center;
  }
  
  .media-content .title {
    margin-left: 0.5rem;
  }
  
  .is-rounded {
    border-radius: 50%;
  }
  
  .displayed-activity {
    padding: 1rem;
    background-color: lightblue;
    color: black;
  }
  
  .workout-card-title {
    margin-bottom: 0.5rem;
    color: black;
  }
  
  .comments {
    margin-top: 1rem;
  }
  
  .comments ul {
    list-style-type: none;
    padding: 0;
  }
  
  .comments li {
    margin-bottom: 0.5rem;
  }
  </style>
  