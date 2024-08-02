<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-blue-500">Search Meals by Name</h1>
  </div>
  <div class="px-8 pb-3">
    <input 
      type="text"
      class="rounded border-2 bg-white border-gray-200 focus:ring-blue-500 focus:border-blue-500 w-full"
      placeholder="Search for Meals"
      v-model="keyword"
      @change="searchMeals"
    />
  </div>
  <div class="grid gap-5 p-8">
    <Meals :meals="meals" />
  </div>
  <!-- <pre>{{ meals }}</pre> -->
</template>
<script setup>
import {ref,computed, onMounted } from 'vue';
import store from "../store";
import { useRoute} from "vue-router";
import Meals from "../components/Meals.vue";
const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if(keyword.value){
    store.dispatch('searchMeals', keyword.value);
  } else {
    store.commit('setSearchedMeals', []);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if(keyword.value){
    searchMeals();
  }
})
</script>
