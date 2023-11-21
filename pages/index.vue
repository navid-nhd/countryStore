<template>
  <div>
    <main class="">
      <div class="container mx-auto">
        <!-- skeleton -->
        <ul
          class="flex flex-wrap items-stretch stre pt-11"
          v-show="!countryList.length"
        >
          <li
            class="lg:w-1/4 lg:basis-1/4 md:w-1/2 md:basis-1/2 sm:w-full sm:basis-full"
            v-for="i in 8"
            :key="i"
          >
            /
            <div class="p-2">
              <Skeleton />
            </div>
          </li>
        </ul>
        <ul
          class="flex flex-wrap pt-11 items-stretch"
          v-show="countryList.length"
        >
          <li
            class="lg:w-1/4 lg:basis-1/4 md:w-1/2 md:basis-1/2 sm:w-full sm:basis-full"
            v-for="(country, index) in countryList"
            :key="country.cca3"
          >
            <div class="p-2 h-full">
              <CountryCard :cca3="country.cca3" />
            </div>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>
<script setup>
import { useFavCountryStore } from "@/stores/favCountries.js";
const fetchCountries = async () => {
  const { data } = await useFetch("https://restcountries.com/v3.1/all");
  useFavCountryStore().fetchAllCountries(data.value);
};
fetchCountries();

const countryList = computed(() => {
  try {
    return useFavCountryStore().totalCountriesList;
  } catch (error) {
    return [];
  }
});
// const favoriteList = computed(() => {
//   try {
//     return useFavCountryStore().favCountryList
//   } catch (error) {
//     return []
//   }
// })
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
<style scoped></style>
