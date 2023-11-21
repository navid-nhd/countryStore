<template>
    <div>
        <header>
            <div class="bg-[#3A5E46] shadow-2xl">
                <div class="flex justify-between h-16  items-center text-white container mx-auto px-8 ">
                    <div class="text-2xl text-bold">Logo</div>
                    <nav>
                        <ul class="flex gap-5 text-xl text-slate-200">
                            <li class="hover:text-white py-2 px-4">
                                <NuxtLink to="/">Home</NuxtLink>
                            </li>
                            <li class="hover:text-white py-2 px-4">
                                <NuxtLink to="/">News</NuxtLink>
                            </li>
                            <li class="hover:text-white py-2 px-4">
                                <NuxtLink to="/">Contact</NuxtLink>
                            </li>
                        </ul>
                    </nav>
                    <NuxtLink to="/favorite">
                        <div class="w-9 h-9 rounded-full bg-[#FDDE67] flex items-center justify-center relative">
                            <div class="w-5 h-5">
                                <img src="@/assets/images/heart-filled.svg" alt="" title="" class="block w-full" />
                            </div>
                            <div
                                class="bg-red-200 w-6 h-6 rounded-full absolute top-0 left-8 flex items-center justify-center text-black">
                                <span>{{ useFavCountryStore().selectedFavoriteList.length }}</span>
                            </div>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </header>
        <slot />
    </div>
</template>
<script setup>
import { useFavCountryStore } from '@/stores/favCountries.js'
</script>