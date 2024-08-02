<template>
  <div class="w-[800] mx-auto p-8">
    <h1 class="text-4xl font-bold mb-5 text-blue-500">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal">
    <div class="grid grid-cols-1 sm:grid-cols-3 text-xl py-2">
      <div>
        <strong clas="font-bold">Category:</strong>{{ meal.strCategory }}
      </div>
      <div>
        <strong clas="font-bold">Area:</strong>{{ meal.strArea }}
      </div>
      <div>
        <strong clas="font-bold">Tags:</strong>{{ meal.strTags }}
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 p-8">
    <div>
      <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul>
        <template v-for="(el, ind)  of new Array(20)" v-bind:key="el">
          <li v-if="meal[`strIngredient${ind + 1}`]">
            {{ind +1}}. {{ meal[`strIngredient${ind + 1}`] }}
          </li>
        </template>
      </ul>
    </div>
    <div>
      <h2 class="text-2xl font-semibold mb-2">Mesures</h2>
      <ul>
        <template v-for="(el, ind)  of new Array(20)" v-bind:key="el">
          <li v-if="meal[`strMeasure${ind + 1}`]">
            {{ind +1}}. {{ meal[`strMeasure${ind + 1}`] }}
          </li>
        </template>
      </ul>
    </div>
    <div class="mt-4">
      <YoutubeButton :href="meal.strYoutube">Go to Youtube</YoutubeButton>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
import YoutubeButton from "../components/YoutubeButton.vue";
const route = useRoute();
const meal = ref({});

// const { meal } = defineProps({
//   meal: {
//     required: true,
//     type: Object
//   }
// })
onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`)
  .then(({ data }) => {
    meal.value = data.meals[0] || {};
  })
})


</script>
