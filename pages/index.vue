<template>
  <main class="bg-slate-50">
    <div class="container mx-auto">

      <div>
        <NuxtLink to="/favPage" class="bg-red-200 rounded-lg px-4 py-2">
          <button>
            go to favorite list! ({{ favoriteList.length }})
          </button>
        </NuxtLink>
      </div>
      <ul class="flex flex-wrap pt-11">
        <li class="w-1/4 basis-1/4" v-for="country in countryList" :key="country.cca3">
          <div class="p-2">
            <CountryCard :country="country" />
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>
<script setup>
import { useFavCountry } from '@/stores/favCountries.js'
const store = useFavCountry()
// import { ref } from 'vue'
//   const countries = ref([])

//   const getCountries = async (query) => {
//     const url = query ? `https://restcountries.com/v3.1/name/${query}` : 'https://restcountries.com/v3.1/all'
//     const response = await fetch(url);
//     countries.value = await response.json();
//   }

//   getCountries()
// import { useFavCountry } from "@/stores/favCountries.js";
// const store = useFavCountry();
const countryList = ref([]);
const fetchCountries = async () => {
  countryList.value = [];
  const { data } = await useFetch("https://restcountries.com/v3.1/all");
  countryList.value = data.value || [];
  store.countriesList = data.value || [];
};
fetchCountries();
const favoriteList = computed(() => {
  try {
    return store.favCountryList
  } catch (error) {
    return []
  }
})
</script>
