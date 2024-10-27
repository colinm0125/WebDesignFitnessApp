<template>
  <section class="admin-section">
    <div class="container">
      <h1 class="title">User Management</h1>

      <button class="button is-primary mb-5" @click="openAddUserModal">Add User</button>

      <div class="box">
        <h2 class="subtitle">Current Users</h2>
        <ul>
          <li v-for="(user, index) in users" :key="user.id" class="user-item">
            <p>
              <strong>{{ user.name }}</strong> - {{ user.role }}
              <button class="button is-info is-small ml-3" @click="openEditUserModal(index)">Edit</button>
              <button class="button is-danger is-small ml-3" @click="removeUser(index)">Delete</button>
            </p>
          </li>
        </ul>
      </div>

      <div class="modal" :class="{ 'is-active': isAddUserModalOpen }">
        <div class="modal-background" @click="closeAddUserModal"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Add New User</p>
            <button class="delete" aria-label="close" @click="closeAddUserModal"></button>
          </header>
          <section class="modal-card-body">
            <form @submit.prevent="addUser">
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input class="input" type="text" v-model="newUser.name" placeholder="Enter name" required />
                </div>
              </div>

              <div class="field">
                <label class="label">Username</label>
                <div class="control">
                  <input class="input" type="text" v-model="newUser.username" placeholder="Enter username" required />
                </div>
              </div>

              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input class="input" type="password" v-model="newUser.password" placeholder="Enter password" required />
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

              <button class="button is-success" type="submit">Add User</button>
            </form>
          </section>
        </div>
      </div>

      <div class="modal" :class="{ 'is-active': isEditUserModalOpen }">
        <div class="modal-background" @click="closeEditUserModal"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Edit User</p>
            <button class="delete" aria-label="close" @click="closeEditUserModal"></button>
          </header>
          <section class="modal-card-body">
            <form @submit.prevent="saveUserEdit">
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input class="input" type="text" v-model="editedUser.name" required />
                </div>
              </div>

              <div class="field">
                <label class="label">Role</label>
                <div class="control">
                  <div class="select">
                    <select v-model="editedUser.role" required>
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </div>
              </div>

              <button class="button is-success" type="submit">Save Changes</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { reactive, ref, onMounted } from 'vue';

interface User {
  id: number;
  username: string;
  password: string;
  name: string;
  role: 'user' | 'admin';
}

export default {
  setup() {
    const users = reactive<User[]>([]);
    const newUser = reactive<User>({ id: 0, username: '', password: '', name: '', role: 'user' });
    const editedUser = reactive<User>({ id: 0, username: '', password: '', name: '', role: 'user' });
    const isAddUserModalOpen = ref(false);
    const isEditUserModalOpen = ref(false);
    let editUserIndex = -1;

    const loadUsers = () => {
      const storedUsers = localStorage.getItem('users');
      if (storedUsers) {
        users.push(...JSON.parse(storedUsers));
      }
      ensureAdminUser();
    };

    const ensureAdminUser = () => {
      const colin = users.find((user) => user.username === 'colin');
      if (!colin) {
        const adminUser: User = {
          id: Date.now(),
          username: 'colin',
          password: 'password123',
          name: 'Colin McDermott',
          role: 'admin',
        };
        users.push(adminUser);
        saveUsers();
      }
    };

    const saveUsers = () => {
      localStorage.setItem('users', JSON.stringify(users));
    };

    const addUser = () => {
      newUser.id = Date.now();
      users.push({ ...newUser });
      saveUsers();
      closeAddUserModal();
    };

    const removeUser = (index: number) => {
      users.splice(index, 1);
      saveUsers();
    };

    const openAddUserModal = () => (isAddUserModalOpen.value = true);
    const closeAddUserModal = () => (isAddUserModalOpen.value = false);

    const openEditUserModal = (index: number) => {
      editUserIndex = index;
      Object.assign(editedUser, users[index]);
      isEditUserModalOpen.value = true;
    };

    const closeEditUserModal = () => (isEditUserModalOpen.value = false);

    const saveUserEdit = () => {
      Object.assign(users[editUserIndex], editedUser);
      saveUsers();
      closeEditUserModal();
    };

    onMounted(loadUsers);

    return {
      users,
      newUser,
      editedUser,
      isAddUserModalOpen,
      isEditUserModalOpen,
      addUser,
      removeUser,
      openAddUserModal,
      closeAddUserModal,
      openEditUserModal,
      closeEditUserModal,
      saveUserEdit,
    };
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
