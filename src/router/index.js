import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue'
import MealDetails from "../views/MealDetails.vue"
import MealByName from "../views/MealByName.vue"
import MealByLetter from "../views/MealByLetter.vue"
import MealByIngredient from "../views/MealByIngredient.vue"
import Ingredient from "../views/Ingredient.vue"
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from "../components/GuestLayout.vue";
const routes = [
  {
    path:'/',
    component: DefaultLayout,
    children: [
      {
        path:'/',
        name: 'home',
        component: Home,
      },
      {
        path:'/by-letter/:letter?',
        name: 'byLetter',
        component: MealByLetter,
      },
      {
        path:'/ingredients',
        name: 'ingredients',
        component: Ingredient,
      },
      {
        path:'/by-ingredient/:ingredient',
        name: 'byIngredient',
        component: MealByIngredient,
      },
      {
        path:'/by-name/:name?',
        name: 'byName',
        component: MealByName,
      },
      {
        path:'/meals/:id?',
        name: 'mealDetails',
        component: MealDetails,
      },
    ]
  },
  // {
  //   path: '/guest/',
  //   component: GuestLayout,
  //   children: [
  //     {
  //       path:'/by-name/:name?',
  //       name: 'byName',
  //       component: MealByName,
  //     },
  //   ]
  // }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router;