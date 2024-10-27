<template>
  <section class="admin-section">
    <div class="container">
      <h1 class="title">User Management</h1>

      <!-- Add User Form -->
      <form @submit.prevent="addUser" class="box">
        <h2 class="subtitle">Add New User</h2>

        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input v-model="newUser.name" class="input" type="text" placeholder="Enter user's name" required />
          </div>
        </div>

        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input v-model="newUser.username" class="input" type="text" placeholder="Enter username" required />
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input v-model="newUser.password" class="input" type="password" placeholder="Enter password" required />
          </div>
        </div>

        <div class="field">
          <label class="label">Role</label>
          <div class="control">
            <div class="select">
              <select v-model="newUser.role" required>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>
        </div>

        <button class="button is-primary" type="submit">Add User</button>
      </form>

      <!-- User List -->
      <div class="box mt-5">
        <h2 class="subtitle">Current Users</h2>
        <ul>
          <li v-for="(user, index) in users" :key="index" class="user-item">
            <p>
              <strong>{{ user.name }}</strong> - {{ user.role }}
              <button class="button is-danger is-small ml-3" @click="removeUser(index)">
                Delete
              </button>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { reactive } from 'vue';

interface User {
  name: string;
  username: string;
  password: string;
  role: 'user' | 'admin';
}

export default {
  setup() {
    const users = reactive<User[]>([
      { name: 'Alice Johnson', username: 'alice', password: 'pass123', role: 'user' },
      { name: 'Bob Smith', username: 'bob', password: 'password123', role: 'admin' },
    ]);

    const newUser: User = reactive({
      name: '',
      username: '',
      password: '',
      role: 'user',
    });

    const addUser = () => {
      users.push({ ...newUser }); // Add the new user to the list
      // Clear the form
      newUser.name = '';
      newUser.username = '';
      newUser.password = '';
      newUser.role = 'user';
    };

    const removeUser = (index: number) => {
      users.splice(index, 1); // Remove the user from the list
    };

    return { users, newUser, addUser, removeUser };
  },
};
</script>

<style scoped>
.admin-section {
  padding: 2rem;
}

.box {
  margin-top: 1rem;
  padding: 1.5rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-item {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  margin-left: 1rem;
}
</style>
