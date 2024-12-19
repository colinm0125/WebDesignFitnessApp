<template>
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
  </template>
  
  <script lang="ts">
  import { ref, watch } from "vue";
  import axios from "axios";
  
  export default {
    name: "AutoComplete",
    setup() {
      const query = ref<string | null>(null);
      const suggestions = ref<string[]>([]);
  
      const fetchSuggestions = async () => {
        if (query.value && query.value.length > 1) {
          try {
            const response = await axios.get(`/api/users/autocomplete?q=${query.value}`);
            suggestions.value = response.data.map((user: any) => user.name);
          } catch (error) {
            console.error("Error fetching suggestions:", error);
          }
        } else {
          suggestions.value = [];
        }
      };
  
      watch(query, fetchSuggestions);
  
      return {
        query,
        suggestions,
      };
    },
  };
  </script>
  
  <style scoped>

  </style>