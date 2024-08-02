<template>
  <div>
    <div class="p-8 pb-0">
      <h1 class="text-4xl font-bold mb-4 text-blue-500">Meals by Letter</h1>
    </div>
    <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
      <router-link :to="{name:'byLetter', params:{letter}}" v-for="letter of letters" v-bind:key="letter"
      class="w-2 h-2 flex item-center justifyc-center hover:text-blue-500 hover:scale-300 transition-all"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-1 gap-5 p-8">
    <Meals :meals="meals" />
  </div>
  <!-- <pre>{{ meals }}</pre> -->
</template>
<script setup>
import { useRoute} from "vue-router";
import {ref,computed, onMounted, watch } from 'vue';
import store from "../store";
import Meals from "../components/Meals.vue";

const route = useRoute();
const letters ="ABCDEFGHIKLMNOPQSTUVXYZ".split("");
const meals = computed(()=>store.state.mealsByLetter);

watch(route,()=>{
  store.dispatch('searchMealsByLetter', route.params.letter);
})

onMounted(() => {
  if(route.params.letter){
    store.dispatch('searchMealsByLetter', route.params.letter);
  }
})
</script>
