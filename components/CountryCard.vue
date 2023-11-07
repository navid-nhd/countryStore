<template>
  <div class="bg-slate-100 p-8 rounded-2xl hover:shadow-lg hover:cursor-pointer">
    <div>
      <img class="block w-full h-auto" :src="country.flags.png" />
    </div>
    <div class="py-4 text-xl font-bold">
      {{ country.name.common }}
    </div>
    <button @click="addToFav(country.cca3)" class="px-3 py-2 rounded-md"
      :class="addedToFav ? 'bg-red-500' : 'bg-red-300'">
      <span> add to fav list </span>
    </button>
  </div>
</template>
<script setup>
import { object } from "vue-types";
import { useFavCountry } from '@/stores/favCountries.js'
const store = useFavCountry()
const props = defineProps({
  country: object(),
});
const addedToFav = ref(false);
const addToFav = (param) => {
  addedToFav.value = !addedToFav.value;
  store.updateList(param)
};
</script>
