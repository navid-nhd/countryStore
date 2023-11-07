<template>
  <main>
    <div class="container mx-auto">
      <ul class="bg-red-400">
        <li>hello</li>
      </ul>
    </div>
  </main>
</template>
<script setup>
// import { ref } from 'vue'
//   const countries = ref([])

//   const getCountries = async (query) => {
//     const url = query ? `https://restcountries.com/v3.1/name/${query}` : 'https://restcountries.com/v3.1/all'
//     const response = await fetch(url);
//     countries.value = await response.json();
//   }

//   getCountries()
import { useFavCountry } from '@/stores/favCountries.js'
const countryList = ref([])
const store = useFavCountry()
const fetchCountries = async () => {
  countryList.value = []
  const { data } = await useFetch('https://restcountries.com/v3.1/all')
  countryList.value = data.value || []
  store.countriesList = data.value || []
}
fetchCountries()
console.log(store.favCountryList)
</script>