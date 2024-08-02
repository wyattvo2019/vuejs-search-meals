<template>
  <!-- <pre>{{meal}}</pre> -->
<div 
  class="bg-white shadow rounded-xl hover:scale-105 transition-all">
  <router-link :to="{name: 'mealDetails', params:{id: meal.idMeal}}">
    <img 
      :src="meal.strMealThumb" 
      :alt="meal.strMeal" 
      class="rounded-t-xl h-48 w-full object-cover" />
  </router-link>
  <div class="p-3">
    <h3 class="font-bold">{{meal.strMeal}}</h3>
    <p v-if="meal.strInstructions">
      {{ meal.strInstructions.substring(0,100) + "..." }}
    </p>
    <div class="flex items-center justify-between">
      <YoutubeButton :href="meal.strYoutube">Go to Youtube</YoutubeButton>
      <a
        :href="meal.strSource"
        target="_blank"
        class="px-3 py-2 rounded border-2 text-white border-indigo-600 bg-indigo-600 hover:bg-indigo-500 hover:text-white transition-colors"
        >Go to source</a>
    </div>
  </div>
</div>
</template>
<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
})
</script>