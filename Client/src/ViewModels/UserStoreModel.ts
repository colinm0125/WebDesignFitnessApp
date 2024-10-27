import { reactive } from 'vue';

export interface User {
  id: number;
  username: string;
  password: string;
  name: string;
  role: 'user' | 'admin'; 
  activities: { title: string; date: string; duration: number }[];
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}


export const userStore: UserStore = reactive({
  user: null,

  setUser(user: User) {
    console.log('User set:', user); 
    this.user = user;
  },

  clearUser() {
    console.log('User cleared'); // Debug log
    this.user = null;
  },
});