<template>
  <section class="tracker-section">
    <div class="container">
      <h1 class="title has-text-centered">Workout Tracker</h1>

      <!-- Search bar at the top of the page -->
      <section>
        <o-field label="Search for friends">
          <o-autocomplete
            v-model="query"
            :data="suggestions"
            @input="fetchSuggestions"
            placeholder="Type to search..."
            clearable
            open-on-focus
          >
            <template #empty>No results found</template>
          </o-autocomplete>
        </o-field>
        <p><b>Selected:</b> {{ query }}</p>
        
      </section>

      <!-- Button to open the Add Workout Modal -->
      <button class="button is-primary mb-5" @click="openModal">Add Workout</button>

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
                  <input class="input" type="text" v-model="newWorkout.title" placeholder="Workout title" required />
                </div>
              </div>

              <div class="field">
                <label class="label">Date</label>
                <div class="control">
                  <input class="input" type="date" v-model="newWorkout.date" required />
                </div>
              </div>

              <div class="field">
                <label class="label">Duration (minutes)</label>
                <div class="control">
                  <input class="input" type="number" v-model="newWorkout.duration" placeholder="Enter duration in minutes" required />
                </div>
              </div>

              <div class="field">
                <label class="label">Location</label>
                <div class="control">
                  <input class="input" type="text" v-model="newWorkout.location" placeholder="Where did you exercise?" required />
                </div>
              </div>

              <div class="field">
                <label class="label">Type</label>
                <div class="control">
                  <input class="input" type="text" v-model="newWorkout.type" placeholder="Workout type (e.g., Cardio, Strength)" required />
                </div>
              </div>

              <button class="button is-primary mt-3" type="submit">Save Workout</button>
            </form>
          </section>
        </div>
      </div>

      <!-- Edit Workout Modal -->
      <div class="modal" :class="{ 'is-active': isEditModalOpen }" v-if="editedWorkout">
        <div class="modal-background" @click="closeEditModal"></div>
        <div class="modal-card social-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Edit Workout</p>
            <button class="delete" aria-label="close" @click="closeEditModal"></button>
          </header>
          <section class="modal-card-body">
            <form @submit.prevent="updateWorkout">
              <div class="field">
                <label class="label">Title</label>
                <div class="control">
                  <input class="input" type="text" v-model="editedWorkout.title" placeholder="Workout title" required />
                </div>
              </div>

              <div class="field">
                <label class="label">Date</label>
                <div class="control">
                  <input class="input" type="date" v-model="editedWorkout.date" required />
                </div>
              </div>

              <div class="field">
                <label class="label">Duration (minutes)</label>
                <div class="control">
                  <input class="input" type="number" v-model="editedWorkout.duration" placeholder="Enter duration in minutes" required />
                </div>
              </div>

              <div class="field">
                <label class="label">Location</label>
                <div class="control">
                  <input class="input" type="text" v-model="editedWorkout.location" placeholder="Where did you exercise?" required />
                </div>
              </div>

              <div class="field">
                <label class="label">Type</label>
                <div class="control">
                  <input class="input" type="text" v-model="editedWorkout.type" placeholder="Workout type (e.g., Cardio, Strength)" required />
                </div>
              </div>

              <button class="button is-primary mt-3" type="submit">Save Changes</button>
            </form>
          </section>
        </div>
      </div>

      <!-- Workouts Display -->
      <div class="columns is-multiline">
        <div v-for="(workout, index) in workouts" :key="workout.id" class="column is-half">
          <div class="card social-card">
            <div class="card-content">
              <p class="title is-4">{{ workout.title }}</p>
              <p class="subtitle is-6">{{ workout.date }}</p>
              <p><strong>Duration:</strong> {{ workout.duration }} mins</p>
              <p><strong>Location:</strong> {{ workout.location }}</p>
              <p><strong>Type:</strong> {{ workout.type }}</p>
              <div class="buttons">
                <button class="button is-info is-small" @click="openEditModal(workout)">Edit</button>
                <button class="button is-danger is-small" @click="deleteWorkout(workout.id)">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AutoComplete from "@/components/AutoComplete.vue";
import Modal from "@/components/Modal.vue";

export default {
  components: {
    AutoComplete,
    Modal,
  },
  data() {
    return {
      isModalOpen: false,
      isEditModalOpen: false,
      newWorkout: {
        title: "",
        date: "",
        duration: "",
        location: "",
        type: "",
      },
      workouts: [],
      editedWorkout: null,
    };
  },
  methods: {
    openModal() {
      this.newWorkout = {
        title: "",
        date: "",
        duration: "",
        location: "",
        type: "",
      };
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    openEditModal(workout) {
      this.editedWorkout = { ...workout };
      this.isEditModalOpen = true;
    },
    closeEditModal() {
      this.isEditModalOpen = false;
    },
    async fetchWorkouts() {
      try {
        console.log("Fetching workouts...");
        const response = await fetch("http://localhost:3000/workouts", {
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) throw new Error("Failed to fetch workouts");
        this.workouts = await response.json();
        console.log("Workouts fetched:", this.workouts);
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    },
    async addWorkout() {
      try {
        console.log("Adding workout:", this.newWorkout);
        const response = await fetch("http://localhost:3000/workouts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.newWorkout),
        });
        if (!response.ok) throw new Error("Failed to add workout");
        await this.fetchWorkouts();
        this.closeModal();
      } catch (error) {
        console.error("Error adding workout:", error);
      }
    },
    async deleteWorkout(id) {
      try {
        console.log("Deleting workout with ID:", id);
        const response = await fetch(`http://localhost:3000/workouts/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) throw new Error("Failed to delete workout");
        await this.fetchWorkouts();
      } catch (error) {
        console.error("Error deleting workout:", error);
      }
    },
    async updateWorkout() {
      try {
        console.log("Updating workout:", this.editedWorkout);
        const response = await fetch(`http://localhost:3000/workouts/${this.editedWorkout.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.editedWorkout),
        });
        if (!response.ok) throw new Error("Failed to update workout");
        await this.fetchWorkouts();
        this.closeEditModal();
      } catch (error) {
        console.error("Error updating workout:", error);
      }
    },
  },
  mounted() {
    console.log("Component mounted");
    this.fetchWorkouts();
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