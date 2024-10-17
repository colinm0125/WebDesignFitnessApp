<template>
    <section class="workout-tracker">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half">
            <!-- Intro Box -->
            <div class="box">
              <h1 class="title has-text-centered">Workout Tracker</h1>
              <p class="has-text-centered">
                Keep track of your workouts with our easy-to-use tracker. <br />
                Log your exercises, sets, reps, and weights to monitor progress. <br />
                Use the calorie calculator to estimate your burned calories!
              </p>
            </div>
  
            <!-- Form Box -->
            <div class="box">
              <form @submit.prevent="calculateCalories">
                <!-- Exercise Field -->
                <div class="field">
                  <label class="label" for="exercise">Exercise</label>
                  <div class="control">
                    <input
                      class="input is-rounded"
                      type="text"
                      id="exercise"
                      v-model="exercise"
                      placeholder="Enter the exercise you performed"
                    />
                  </div>
                </div>
  
                <!-- Sets Field -->
                <div class="field">
                  <label class="label" for="sets">Sets</label>
                  <div class="control">
                    <input
                      class="input is-rounded"
                      type="number"
                      id="sets"
                      v-model.number="sets"
                      placeholder="Enter the number of sets"
                    />
                  </div>
                </div>
  
                <!-- Reps Field -->
                <div class="field">
                  <label class="label" for="reps">Reps</label>
                  <div class="control">
                    <input
                      class="input is-rounded"
                      type="number"
                      id="reps"
                      v-model.number="reps"
                      placeholder="Enter the number of reps"
                    />
                  </div>
                </div>
  
                <!-- Weight Field -->
                <div class="field">
                  <label class="label" for="weight">Weight (lbs)</label>
                  <div class="control">
                    <input
                      class="input is-rounded"
                      type="number"
                      id="weight"
                      v-model.number="weight"
                      placeholder="Enter the weight used"
                    />
                  </div>
                </div>
  
                <!-- Submit Button -->
                <div class="field">
                  <div class="control">
                    <button class="button is-primary is-fullwidth is-rounded">
                      Calculate Calories
                    </button>
                  </div>
                </div>
              </form>
  
              <!-- Calories Notification -->
              <div v-if="caloriesBurned !== null" class="notification is-info has-text-centered">
                <p>You burned <strong>{{ caloriesBurned }} calories</strong> during your workout!</p>
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
        exercise: '',
        sets: 0,
        reps: 0,
        weight: 0,
        caloriesBurned: null
      };
    },
  
    methods: {
      calculateCalories() {
        const metValue = 3.0; // MET value for weightlifting
        const weightKg = this.weight / 2.20462; // Convert lbs to kg
        const durationHours = (this.sets * this.reps * 2) / 60; // Workout duration in hours
        this.caloriesBurned = Math.round(metValue * weightKg * durationHours);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Fix navbar overlap by adding padding to the top */
  .workout-tracker {
    min-height: 100vh;
    padding-top: 4rem; /* Add space to prevent overlap with navbar */
    background-color: #87ceeb; /* Light blue background for consistency */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Box styles */
  .box {
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    background-color: white;
  }
  
  /* Title styling */
  .title {
    color: #333; /* Darker text for contrast */
    margin-bottom: 1rem;
  }
  
  /* Notification styling */
  .notification {
    margin-top: 1rem;
    border-radius: 12px;
  }
  
  /* Input fields with light gray background */
  .input {
    background-color: #f0f0f0; /* Light gray background */
    border: 1px solid #ddd; /* Light border for better contrast */
    color: #333; /* Darker text for better readability */
    border-radius: 8px; /* Rounded corners */
  }
  
  /* Hover effect on input fields */
  .input:focus {
    border-color: #00b89c; /* Slightly darker green on focus */
    box-shadow: 0 0 0 0.125em rgba(0, 184, 156, 0.25); /* Subtle focus shadow */
  }
  
  /* Button styling */
  .button {
    background-color: #00d1b2; /* Same green as your home page button */
    border: none;
    transition: background-color 0.3s ease;
  }
  
  .button:hover {
    background-color: #00b89c; /* Slightly darker green on hover */
  }
  </style>
  