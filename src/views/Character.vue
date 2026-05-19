<script setup>
import Nav from '@/components/Nav.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const search = ref('')
const totalData = ref(0);
const data = ref([])
const loading = ref(false)
const getData = async () => {
    try {
        loading.value = true
        const res = await axios.get('https://api.api-onepiece.com/v2/characters/en')
        data.value = res.data
        console.log(data.value)
        totalData.value = res.data.length;
    } catch (error) {
        console.log(error)
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    getData()
})

</script>

<style>
.loader {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid #514b82;
  animation:
    l20-1 0.8s infinite linear alternate,
    l20-2 1.6s infinite linear;
}
@keyframes l20-1{
   0%    {clip-path: polygon(50% 50%,0       0,  50%   0%,  50%    0%, 50%    0%, 50%    0%, 50%    0% )}
   12.5% {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100%   0%, 100%   0%, 100%   0% )}
   25%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 100% 100%, 100% 100% )}
   50%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
   62.5% {clip-path: polygon(50% 50%,100%    0, 100%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
   75%   {clip-path: polygon(50% 50%,100% 100%, 100% 100%,  100% 100%, 100% 100%, 50%  100%, 0%   100% )}
   100%  {clip-path: polygon(50% 50%,50%  100%,  50% 100%,   50% 100%,  50% 100%, 50%  100%, 0%   100% )}
}
@keyframes l20-2{ 
  0%    {transform:scaleY(1)  rotate(0deg)}
  49.99%{transform:scaleY(1)  rotate(135deg)}
  50%   {transform:scaleY(-1) rotate(0deg)}
  100%  {transform:scaleY(-1) rotate(-135deg)}
}
</style>

<template>
    <Nav />
    <div class="flex flex-col gap-5 top-0 md:top-22 lg:top-22">
        <div class="pt-27 px-0">
            <div class="flex items-center justify-center pl-5">
                <input type="search" v-model="search" placeholder="Search Here ..." name="" class="outline-2 mr-5 outline-gray-300 bg-gray-100 focus:bg-white focus:outline-blue-500 flex-1 transition duration-200 rounded-xl py-3 px-3" id="">
            </div>
        </div>
        <div v-if="totalData" class="px-10 -mb-2 mt-5 text-end text-gray-500">Menampilkan {{ totalData }} data</div>
        <div v-else class="px-10 text-gray-500 text-end">Menampilkan ... data</div>
        <div v-if="loading" class="flex gap-5 h-screen justify-center items-center">
            <div class="loader items Center"></div>
            <p>Loading</p>
        </div>
        <div class="grid grid-cols-1 px-4 md:px-10">
        <div v-for="(item, index) in data.filter(i => i.name.toLowerCase().includes(search.toLowerCase() ))" :key="index" class="flex flex-col mb-5 gap-6 bg-gray-100 border-2 border-gray-300 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                    <h2 class="text-3xl font-bold text-gray-800">{{ item.name }}</h2>
                    <p class="text-red-500 font-semibold">{{ item.crew?.name }}</p>
                </div>
                <div class="flex gap-2">
                    <span class="px-4 py-2 bg-red-500/50 border-2 border-red-500 text-red-800 rounded-xl text-sm font-semibold items-center flex">{{ item.crew?.roman_name }}</span>
                    <span class="px-4 py-2 bg-gray-800/50 border-2 border-black text-black rounded-xl text-sm font-semibold items-center flex">{{ item.crew?.status }}</span>
                    <span class="px-4 py-2 bg-yellow-400/50 border-2 border-yellow-500 text-yellow-800 rounded-xl  text-sm font-bold w-fit items-center flex">Yonko</span>
                </div>
            </div>
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <div class="bg-white rounded-xl p-4 border border-gray-200">
                    <p class="text-sm text-gray-500">Age</p>
                    <h3 v-if="item.age" class="font-bold text-lg">{{ item?.age }}</h3>
                    <h3 v-else class="font-bold text-lg">No Data</h3>
                </div>
                <div class="bg-white rounded-xl p-4 border border-gray-200">
                    <p class="text-sm text-gray-500">Height</p>
                    <h3 v-if="item.size" class="font-bold text-lg">{{ item?.size }}</h3>
                    <h3 v-else class="font-bold text-lg">No Data</h3>
                </div>
                <div class="bg-white rounded-xl p-4 border border-gray-200">
                    <p class="text-sm text-gray-500">฿ Bounty</p>
                    <h3 v-if="item.bounty" class="font-bold text-lg text-green-500">{{ item.bounty }}</h3>
                    <h3 v-else class="font-bold text-lg">No Data</h3>
                </div>
                <div class="bg-white rounded-xl p-4 border border-gray-200">
                    <p class="text-sm text-gray-500">Devil Fruit</p>
                    <h3 v-if="item.fruit?.name" class="font-bold text-lg">{{ item.fruit?.name }}</h3>
                    <h3 v-else class="font-bold text-lg">No Data</h3>
                </div>
                <div class="bg-white rounded-xl p-4 border border-gray-200">
                    <p class="text-sm text-gray-500">Job</p>
                    <h3 v-if="item.job" class="font-bold text-lg">{{ item.job }}</h3>
                    <h3 v-else class="font-bold text-lg">No Data</h3>
                </div>
                <div class="bg-white rounded-xl p-4 border border-gray-200">
                    <p class="text-sm text-gray-500">Status</p>
                    <h3 v-if="item.status" class="font-bold text-lg text-green-500">{{ item.status }}</h3>
                    <h3 v-else class="font-bold text-lg">No Data</h3>
                </div>
            </div>
            <div class="bg-white rounded-xl p-5 border border-gray-200">
                <h3 class="font-bold text-xl mb-2 text-gray-800">Fruit Description</h3>
                <p v-if="item.fruit?.description" class="text-gray-600 leading-relaxed">{{ item.fruit?.description }}</p>
                <h3 v-else class="font-normal text-lg">No Data</h3>
            </div>
        </div>
        </div>
        </div>
</template>