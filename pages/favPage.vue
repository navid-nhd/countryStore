<template>
  <div class="container mx-auto">
    <ul class="flex flex-wrap pt-11">
      <li
        class="w-1/4 basis-1/4"
        v-for="country in favoriteDetailedList"
        :key="country.cca3"
      >
        <div class="p-2">
          <CountryCard :country="country" />
        </div>
      </li>
    </ul>
    <div class="pt-16 pb-2">
      <h2 class="font-bold text-red-400 text-2xl">Boreders</h2>
    </div>
    <ul class="flex flex-wrap">
      <li
        class="w-1/4 basis-1/4"
        v-for="country in bordersDetail"
        :key="country.cca3"
      >
        <div class="p-2">
          <CountryCard :country="country" />
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { includes, uniqBy } from "lodash";
import { useFavCountry } from "@/stores/favCountries.js";
const store = useFavCountry();
const favoriteDetailedList = computed(() => {
  try {
    return store.favCountryList;
  } catch (error) {
    return [];
  }
});
const bordersList = ref([]);
watch(
  favoriteDetailedList.value,
  () => {
    bordersList.value = [];
    // console.log(favoriteDetailedList.value);
    bordersList.value = favoriteDetailedList.value.map((item) =>
      item?.borders ? item?.borders : ""
    );
  },
  { immediate: true }
);
const uniquedBorders = computed(() => {
  try {
    return uniqBy(bordersList.value.flat().filter((item) => item));
  } catch (error) {
    return [];
  }
});
// const bordersString = ref("");
// const paramName = route.params.name.replaceAll("-", " ");

// const { data: coutryDetail } = await useFetch(
//   `https://restcountries.com/v3.1/name/${paramName}`
// );

// coutryDetail.value[0].borders.forEach((item) => {
//   bordersString.value = bordersString.value + item + ",";
// });
const bordersDetail = ref([]);
watch(
  () => uniquedBorders.value,
  async () => {
    bordersDetail.value = [];
    const { data } = await useFetch(
      `https://restcountries.com/v3.1/alpha?codes=${uniquedBorders.value
        .flat()
        .join()}`
    );
    console.log(data.value);
    bordersDetail.value = data.value || [];
  },
  { immediate: true }
);
</script>
