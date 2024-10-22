<template>
  <section class="tracker-section">
    <div class="container">
      <h1 class="title has-text-centered">Workout Tracker</h1>

      <!-- Button to open the Add Workout Modal -->
      <button class="button is-primary mb-5" @click="openModal">
        Add Workout
      </button>

      <!-- Add Workout Modal -->
      <div class="modal" :class="{ 'is-active': isModalOpen }">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal-card social-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Add New Workout</p>
            <button class="delete" aria-label="close" @click="closeModal"></button>
          </header>
          <section class="modal-card-body">
            <form @submit.prevent="addWorkout">
              <div class="field">
                <label class="label">Title</label>
                <div class="control">
                  <input class="input" type="text" v-model="newWorkout.title" placeholder="Workout title" />
                </div>
              </div>

              <div class="field">
                <label class="label">Date</label>
                <div class="control">
                  <input class="input" type="date" v-model="newWorkout.date" />
                </div>
              </div>

              <div class="field workout-label">
                <label class="label">Duration (minutes)</label>
                <div class="control">
                  <input class="input" type="number" v-model="newWorkout.duration" placeholder="Enter duration in minutes" />
                </div>
              </div>

              <div class="field">
                <label class="label">Location</label>
                <div class="control">
                  <input class="input" type="text" v-model="newWorkout.location" placeholder="Where did you exercise?" />
                </div>
              </div>

              <div class="field">
                <label class="label">Type</label>
                <div class="control">
                  <input class="input" type="text" v-model="newWorkout.type" placeholder="Workout type (e.g., Cardio, Strength)" />
                </div>
              </div>

              <div class="field">
                <label class="label">Upload Picture</label>
                <div class="control">
                  <input class="input" type="file" @change="handleImageUpload" />
                </div>
              </div>

              <button class="button is-primary mt-3" type="submit">Save Workout</button>
            </form>
          </section>
        </div>
      </div>

      
      <div class="columns is-multiline">
        <div v-for="(workout, index) in workouts" :key="index" class="column is-half">
          <div class="card social-card">
            <div class="card-image" v-if="workout.picture">
              <figure class="image">
                <img :src="workout.picture" alt="Workout Image" />
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-4">{{ workout.title || 'Untitled Workout' }}</p>
              <p class="subtitle is-6">{{ workout.date || 'No Date Provided' }}</p>
              <p><strong>Duration:</strong> {{ workout.duration || 'N/A' }} mins</p>
              <p><strong>Location:</strong> {{ workout.location || 'N/A' }}</p>
              <p><strong>Type:</strong> {{ workout.type || 'N/A' }}</p>
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
      isModalOpen: false,
      newWorkout: {
        title: '',
        date: '',
        duration: '',
        location: '',
        type: '',
        picture: null,
      },
      workouts: [],
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.newWorkout.picture = URL.createObjectURL(file);
      }
    },
    addWorkout() {
      this.workouts.push({ ...this.newWorkout });
      this.newWorkout = {
        title: '',
        date: '',
        duration: '',
        location: '',
        type: '',
        picture: null,
      };
      this.closeModal();
    },
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

.card-image img {
  object-fit: cover;
  height: 200px;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
