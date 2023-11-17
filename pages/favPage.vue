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
            {{ bordersNameList }}
            {{ allFavCountryNames }}
            <h2 class="font-bold text-red-400 text-2xl">Borders</h2>
            <ul class="flex flex-wrap pt-11">
                <li class="w-1/4 basis-1/4" v-for="country in bordersDetailList" :key="country.cca3">
                    <div class="p-2">
                        <CountryCard :cca3="country.cca3" />
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { includes, reject, uniq, difference } from 'lodash'
import { useFavCountryStore } from '@/stores/favCountries.js'
const favoriteDetailedList = computed(() => {
    try {
        return useFavCountryStore().selectedFavoriteList
    } catch (error) {
        return []
    }
})
const allFavListCca3 = computed(() => {
    try {
        return favoriteDetailedList.value.map((item) => item.cioc)
    } catch (error) {
        return []
    }
})

const bordersCodeList = computed(() => {
    try {
        return uniq(favoriteDetailedList.value.map(item => {
            if (!!item.borders) {
                return item.borders
            } else {
                return ''
            }
        })).flat().filter(item => !includes(allFavListCca3.value, item)).join()
    } catch (error) {
        return ''
    }
})
const bordersDetailList = ref([])
const fetchBorders = async () => {
    bordersDetailList.value = []
    const { data: bordersDetail } = await useFetch(
        `https://restcountries.com/v3.1/alpha?codes=${bordersCodeList.value}`
    );
    bordersDetailList.value = bordersDetail.value
}
const bordersNameList = computed(() => {
    try {
        return bordersDetailList.value.map(item => item.name.common)
    } catch (error) {
        return []
    }
})
const allFavCountryNames = computed(() => {
    try {
        return favoriteDetailedList.value.map((item) => item.name.common)
    } catch (error) {
        return []
    }
})
watch(favoriteDetailedList.value, async () => {
    fetchBorders()
}, { immediate: true })
watch(bordersCodeList.value, () => {
    fetchBorders()
}, { immediate: true })
// watch(allFavCountryNames, (oldVal, newVal) => {
//     console.log(difference(newVal, oldVal))

//     const index = bordersDetailList.value.findIndex(item => item.name.common == difference(oldVal, newVal))
//     bordersDetailList.value.splice(index, 1)
// })
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