<template>
    <div class="container mx-auto">
        <ul class="flex flex-wrap pt-11">
            <li class="w-1/4 basis-1/4" v-for="country in favoriteDetailedList" :key="country.cca3">
                <div class="p-2">
                    <CountryCard :cca3="country.cca3" />
                </div>
            </li>
        </ul>
        <div class="pt-4 pb-16">
            <h2 class="font-bold text-red-400 text-2xl">Borders</h2>

            thise is borders"{{ bordersList }}
        </div>
    </div>
</template>
<script setup>
import { includes } from 'lodash'
import { useFavCountryStore } from '@/stores/favCountries.js'
const favoriteDetailedList = computed(() => {
    try {
        return useFavCountryStore().selectedFavoriteList
    } catch (error) {
        return []
    }
})
const bordersList = computed(() => {
    try {
        return favoriteDetailedList.value.map(item => {
            if (!!item.borders) {
                return item.borders
            } else {
                return ''
            }
        }).flat().join()
    } catch (error) {
        return []
    }
})

watch(favoriteDetailedList.value, () => {
    console.log(bordersList.value)
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