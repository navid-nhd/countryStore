<template>
  <main class="bg-slate-50">
    <div class="container mx-auto">
      <div>
        <NuxtLink to="/favPage" class="bg-red-200 rounded-lg px-4 py-2">
          <button>
            go to favorite list! ({{ useFavCountryStore().selectedFavoriteList.length }})
          </button>
        </NuxtLink>
      </div>
      <ul class="flex flex-wrap pt-11">
        <li class="w-1/4 basis-1/4" v-for="(country, index) in countryList" :key="country.cca3">
          <div class="p-2">
            <CountryCard :cca3="country.cca3" />
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>
<script setup>
import { useFavCountryStore } from '@/stores/favCountries.js'
const fetchCountries = async () => {
  const { data } = await useFetch("https://restcountries.com/v3.1/all");
  useFavCountryStore().fetchAllCountries(data.value)
};
fetchCountries();

const countryList = computed(() => {
  try {
    return useFavCountryStore().totalCountriesList
  } catch (error) {
    return []
  }
});
console.log(countryList.value[0])
const favoriteList = computed(() => {
  try {
    return useFavCountryStore().favCountryList
  } catch (error) {
    return []
  }
})
// import { ref } from 'vue'
//   const countries = ref([])

//   const getCountries = async (query) => {
//     const url = query ? `https://restcountries.com/v3.1/name/${query}` : 'https://restcountries.com/v3.1/all'
//     const response = await fetch(url);
//     countries.value = await response.json();
//   }

//   getCountries()
// import { useFavCountryStore } from "@/stores/favCountries.js";
// const store = useFavCountryStore();


// const fetchCountries = async () => {
//   countryList.value = [];
//   const { data } = await useFetch("https://restcountries.com/v3.1/all");
//   countryList.value = data.value || [];
//   store.countriesList = data.value || [];
// };
// fetchCountries();
</script>
