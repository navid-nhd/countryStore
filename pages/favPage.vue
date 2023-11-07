<template>
    <div class="container mx-auto">

        <ul class="flex flex-wrap pt-11">
            <li class="w-1/4 basis-1/4" v-for="country in favoriteDetailedList" :key="country.cca3">
                <div class="p-2">
                    <CountryCard :country="country" />
                </div>
            </li>
        </ul>
        <div class="pt-32 pb-16">
            <h2 class="font-bold text-red-400 text-2xl ">Boreders</h2>
        </div>
    </div>
</template>
<script setup>
import { includes } from 'lodash'
import { useFavCountry } from '@/stores/favCountries.js'
const store = useFavCountry()
const favoriteDetailedList = computed(() => {
    try {
        return store.favCountryList
    } catch (error) {
        return []
    }
})
watch(favoriteDetailedList.value, () => {
    console.log('hello')
}, { immediate: true })
// const bordersString = ref("");
// const paramName = route.params.name.replaceAll("-", " ");

// const { data: coutryDetail } = await useFetch(
//   `https://restcountries.com/v3.1/name/${paramName}`
// );

// coutryDetail.value[0].borders.forEach((item) => {
//   bordersString.value = bordersString.value + item + ",";
// });
// const { data: bordersDetail } = await useFetch(
//   `https://restcountries.com/v3.1/alpha?codes=${bordersString.value}`
// );
</script>