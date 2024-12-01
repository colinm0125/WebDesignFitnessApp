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
              <button class="button is-info is-small ml-3" @click="openEditUserModal(user)">Edit</button>
              <button class="button is-danger is-small ml-3" @click="removeUser(user.id)">Delete</button>
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
import { ref, reactive, onMounted, nextTick } from 'vue';

interface User {
  id: number;
  username: string;
  password: string;
  name: string;
  role: 'user' | 'admin';
}

export default {
  setup() {
    const users = ref<User[]>([]);
    const newUser = reactive<Omit<User,'id'>>({username: '', password: '', name: '', role: 'user' });
    const editedUser = reactive<User>({ id: 0, username: '', password: '', name: '', role: 'user' });
    const isAddUserModalOpen = ref(false);
    const isEditUserModalOpen = ref(false);

    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/users');
        if (!response.ok) throw new Error('Failed to fetch users');
        users.value = await response.json();
      } catch (error) {
        console.error('Error fetching users:', error);
        alert(`Error fetching users: ${(error as Error).message}`);
      }
    };

    const addUser = async () => {
      if (users.value.some((user) => user.username === newUser.username)) {
        alert('This username is already taken.');
        return;
      }

      try {
        const userToAdd = { ...newUser };

        const response = await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser),
        });

        if (!response.ok) throw new Error('Failed to add user');

        await fetchUsers();
        closeAddUserModal();
      } catch (error) {
        console.error('Error adding user:', error);
        alert(`Error adding user: ${(error as Error).message}`);
      }
    };

    const removeUser = async (id: number) => {
      try {
        const response = await fetch(`http://localhost:3000/users/${id}`, { method: 'DELETE' });
        if (!response.ok) throw new Error('Failed to delete user');
        await fetchUsers();
      } catch (error) {
        console.error('Error removing user:', error);
        alert(`Error removing user: ${(error as Error).message}`);
      }
    };

    const openAddUserModal = () => {
      newUser.username = '';
      newUser.password = '';
      newUser.name = '';
      newUser.role = 'user';
      isAddUserModalOpen.value = true;
      nextTick(() => (document.querySelector('#addUserModal input') as HTMLInputElement)?.focus());
    };

    const closeAddUserModal = () => (isAddUserModalOpen.value = false);

    const openEditUserModal = (user: User) => {
      Object.assign(editedUser, user);
      isEditUserModalOpen.value = true;
    };

    const closeEditUserModal = () => (isEditUserModalOpen.value = false);

    const saveUserEdit = async () => {
  try {
    if (!editedUser.name || !editedUser.role) {
      alert('Name and role are required.');
      return;
    }

    const payload = {
      name: editedUser.name,
      role: editedUser.role,
    };

    console.log('Payload being sent to backend:', payload);

    const response = await fetch(`http://localhost:3000/users/${editedUser.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error(`Failed to update user with ID ${editedUser.id}`);

    await fetchUsers();
    closeEditUserModal();
    alert('User updated successfully!');
  } catch (error) {
    console.error('Error saving user edit:', error);
    alert(`Error saving user edit: ${(error as Error).message}`);
  }
};


    onMounted(fetchUsers);

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
