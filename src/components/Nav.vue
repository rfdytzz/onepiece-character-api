<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const isSidebar = ref(false)
const showSidebar = () => {
    isSidebar.value = !isSidebar.value
}

</script>

<template>
    <div class="w-full fixed top-0 flex z-40 justify-between px-10 items-center shadow h-22 bg-white text-blue-500">
        <h1 class="font-bold text-[25px]">One <span class="text-red-500">Piece</span></h1>
        <div class="hidden md:block lg:block">
            <ul class="flex gap-3 items-center">
                <router-link to="/" :class="[route.path === '/' ? 'bg-gray-100' : 'text-blue-500']" class="p-3 hover:bg-gray-100 text-gray-900 transition duration-200 px-3 py-2 rounded-2xl">Home</router-link>
                <router-link to="/character" :class="[route.path === '/character' ? 'bg-gray-100' : 'text-blue-500']" class="hover:bg-gray-100 transition duration-200 px-3 py-2 rounded-2xl text-gray-900">Character</router-link>
                <router-link to="/fruit" :class="[route.path === '/fruit' ? 'bg-gray-100' : 'text-blue-500']" class="hover:bg-gray-100 transition duration-200 px-3 py-2 rounded-2xl text-gray-900">Devil Fruit</router-link>
            </ul>
        </div>
        <div class="block md:hidden lg:hidden">
            <button @click="showSidebar" class="flex cursor-pointer flex-col gap-2">
                <span class="bg-black w-6 h-0.5"></span>
                <span class="bg-black w-6 h-0.5"></span>
                <span class="bg-black w-6 h-0.5"></span>
            </button>
        </div>
    </div>
    <div :class="isSidebar ? 'block' : 'hidden'" class="inset-0 transition duration-200 fixed z-30 bg-black/50" @click="showSidebar"></div>
    <div :class="isSidebar ? 'translate-x-0' : 'translate-x-full'" class="bg-white z-40 shadow-2xl transition duration-200 fixed right-0 top-22 h-screen w-64 p-5">
        <ul class="flex gap-3 flex-col">
            <router-link to="/" :class="[route.path === '/' ? 'bg-gray-200' : '']" class="p-3 hover:bg-gray-100 text-gray-900 transition duration-200 px-3 py-2 rounded">Home</router-link>
            <router-link to="/character" :class="[route.path === '/character' ? 'bg-gray-100' : '']" class="hover:bg-gray-100 transition duration-200 px-3 py-2 rounded text-gray-900">Character</router-link>
            <router-link to="/fruit" :class="[route.path === '/fruit' ? 'bg-gray-100' : '']" class="hover:bg-gray-100 transition duration-200 px-3 py-2 rounded text-gray-900">Devil Fruit</router-link>
        </ul>
    </div>
</template>