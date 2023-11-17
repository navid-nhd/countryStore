<template>
  <div class="bg-slate-100 p-8 rounded-2xl hover:shadow-lg hover:cursor-pointer">
    <div>
      <img class="block w-full h-auto" :src="countryInfo.flags.png" />
    </div>
    <div class="py-4 text-xl font-bold">
      {{ countryInfo.name.common }}
    </div>
    <button @click="addToFav(countryInfo.cca3)" class="px-3 py-2 rounded-md"
      :class="countryInfo.isFav ? 'bg-red-500' : 'bg-red-300'">
      <span> add to fav list </span>
    </button>
  </div>
</template>
<script setup>
import { string } from "vue-types";
import { useFavCountryStore } from '@/stores/favCountries.js'

const props = defineProps({
  cca3: string()
});
const addToFav = (param) => {
  useFavCountryStore().updateFavList(param)
};
const countryInfo = computed(() => {
  try {
    return useFavCountryStore().totalCountriesList.find(item => item.cca3 == props.cca3)
  } catch (error) {
    return {}
  }
})
</script>
