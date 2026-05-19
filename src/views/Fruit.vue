<script setup>
import Nav from '@/components/Nav.vue';
</script>

<template>
    <Nav />
    <div class="w-full top-70 md:top-22 lg:top-22 h-64 fixed -z-10 inset-0">
        <img src="/img/hero.jpg" class="scale-400 md:scale-100 lg:scale-100"></img>
    </div>
    <div class="fixed z-0 bg-black/50 w-full h-screen"></div>
    <div class="w-full pt-30 md:pt-22 lg:pt-22 mb-20 pb-10 px-10 flex flex-col items-center justify-center h-screen">
        <div class="relative flex flex-col gap-10 text-center z-10">
            <h1 class="text-[20px] font-bold text-white"><span class="text-white text-[50px]">Coming<span> Soon...</span></span></h1>
            <router-link to="/" class="p-3 bg-red-500/80 font-bold hover:bg-red-500 cursor-pointer border-2 border-red-500 text-white rounded-xl">Home</router-link>
        </div>
    </div>
    <div class="relative bottom-0 flex flex-col items-center justify-center w-full h-20 bg-white">
        <p>Made by <a href="" class="font-bold">rfkdytp</a></p>
        <p>© Free Public API</p>
    </div>
</template>