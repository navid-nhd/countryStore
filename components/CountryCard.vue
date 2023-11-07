<template>
  <div
    class="bg-slate-100 p-8 rounded-2xl hover:shadow-lg hover:cursor-pointer"
  >
    <div>
      <img class="block w-full h-auto" :src="country.flags.png" />
    </div>
    <div class="py-4 text-xl font-bold">
      {{ country.name.common }}
    </div>
    <Button
      @click="addToFav()"
      class="px-3 py-2 rounded-md"
      :class="addedToFav ? 'bg-red-500' : 'bg-red-300'"
      >add to fav!</Button
    >
  </div>
</template>
<script setup>
import { object } from "vue-types";
const props = defineProps({
  country: object(),
});
const addedToFav = ref(false);
const addToFav = () => {
  addedToFav.value = !addedToFav.value;
};
</script>
