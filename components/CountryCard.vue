<template>
  <div
    class="bg-slate-100 h-full p-8 rounded-2xl hover:shadow-lg hover:cursor-pointer flex flex-col"
  >
    <div>
      <img class="block w-full h-auto" :src="countryInfo.flags.png" />
    </div>
    <div
      class="flex justify-between items-center py-2 border-b border-slate-300"
    >
      <div class="py-4 text-xl">
        <div class="font-bold">
          {{ countryInfo.name.common }}
        </div>
        <div class="!text-normal">cca3 : {{ countryInfo.cca3 }}</div>
      </div>
      <button @click="addToFav(countryInfo.cca3)" class="px-1 py-2 rounded-md">
        <div v-if="countryInfo.isFav" class="w-8 h-8">
          <img
            src="@/assets/images/heart-filled.svg"
            alt=""
            title=""
            class="block w-full"
          />
        </div>
        <div v-if="!countryInfo.isFav" class="w-8 h-8">
          <img
            src="@/assets/images/heart-empty.svg"
            alt=""
            title=""
            class="block w-full"
          />
        </div>
      </button>
    </div>
    <div class="text-lg pt-2">Region: {{ countryInfo.region }}</div>
    <div class="text-lg">
      Population: {{ countryInfo.population.toLocaleString() }}
    </div>
    <div class="text-lg">
      Languages:
      <ul class="flex">
        <li v-for="(i, index) in languagelist" :key="index">
          {{ i }}
          <span class="p-0.5" v-show="index != languagelist.length - 1">
            -
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { string } from "vue-types";
import { useFavCountryStore } from "@/stores/favCountries.js";

const props = defineProps({
  cca3: string(),
});
const addToFav = (param) => {
  useFavCountryStore().updateFavList(param);
};
const countryInfo = computed(() => {
  try {
    return useFavCountryStore().totalCountriesList.find(
      (item) => item.cca3 == props.cca3
    );
  } catch (error) {
    return {};
  }
});
const languagelist = computed(() => {
  try {
    return Object.values(countryInfo.value.languages);
  } catch (error) {
    return {};
  }
});
</script>
