<template>
  <div class="grid gap-5 p-8">
    <div class="p-8 pb-0">
      <h1 class="text-4xl font-bold mb-4 text-blue-500">Meals for {{ ingredient.strIngredient }}</h1>
    </div>
    <Meals :meals="meals" />
  </div>
</template>
<script setup>
import { useRoute} from "vue-router";
import { onMounted, ref, computed } from "vue";
import store from "../store";
import Meals from "../components/Meals.vue";

const route = useRoute();
const ingredient = computed(() => store.state.ingredient)
const meals = computed(()=> store.state.mealsByIngredients);
onMounted(()=>{
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
})
</script>
