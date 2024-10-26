<template>
    <section class="admin-section">
      <div class="container">
        <h1 class="title has-text-centered">Admin Panel: User Management</h1>
  
        <!-- Users Table -->
        <table class="table is-fullwidth is-hoverable mt-5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Name</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.username }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.role }}</td>
              <td>
                <button class="button is-info is-small" @click="editUser(user)">Edit</button>
                <button class="button is-danger is-small" @click="deleteUser(user.id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
  
        <!-- User Form -->
        <div class="box mt-5">
          <h2 class="subtitle">{{ isEditing ? 'Edit User' : 'Add New User' }}</h2>
  
          <form @submit.prevent="saveUser">
            <div class="field">
              <label class="label">Username</label>
              <div class="control">
                <input class="input" type="text" v-model="userForm.username" placeholder="Enter username" required />
              </div>
            </div>
  
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input class="input" type="text" v-model="userForm.name" placeholder="Enter name" required />
              </div>
            </div>
  
            <div class="field">
              <label class="label">Role</label>
              <div class="control">
                <div class="select">
                  <select v-model="userForm.role">
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
            </div>
  
            <button class="button is-primary mt-3" type="submit">
              {{ isEditing ? 'Update User' : 'Add User' }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [], // List of users
        isEditing: false, // Track if editing a user
        userForm: {
          id: null,
          username: '',
          name: '',
          role: 'user',
        },
      };
    },
    methods: {
      async fetchUsers() {
        try {
          const response = await fetch('/src/assets/users.json'); // Fetch user data
          const data = await response.json();
          this.users = data;
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      },
  
      saveUser() {
        if (this.isEditing) {
          // Update the user in the users list
          const index = this.users.findIndex((u) => u.id === this.userForm.id);
          if (index !== -1) this.users[index] = { ...this.userForm };
        } else {
          // Add a new user with a unique ID
          const newUser = { ...this.userForm, id: Date.now() };
          this.users.push(newUser);
        }
  
        this.resetForm(); // Reset the form after saving
      },
  
      editUser(user) {
        this.isEditing = true;
        this.userForm = { ...user }; // Populate form with user data
      },
  
      deleteUser(userId) {
        this.users = this.users.filter((user) => user.id !== userId); // Delete user
      },
  
      resetForm() {
        this.isEditing = false;
        this.userForm = {
          id: null,
          username: '',
          name: '',
          role: 'user',
        };
      },
    },
    mounted() {
      this.fetchUsers(); // Fetch users when the component is mounted
    },
  };
  </script>
  
  <style scoped>
  .admin-section {
    min-height: 100vh;
    padding: 2rem;
    background-color: #f5f5f5;
  }
  
  .table {
    margin-top: 2rem;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .box {
    margin-top: 2rem;
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>
  