<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import type { Mahasiswa } from '@/type/mahasiswa';
const mahasiswa = ref<Mahasiswa[]>([]);

async function getMahasiswa() {
    try {
        const response = await axios.get('http://localhost:3434/mahasiswa')
        mahasiswa.value = response.data;
        console.log(mahasiswa)
    } catch (error) {
        console.log(error)
    }
}
onMounted(async()=>{
    await getMahasiswa()

})

</script>

<template>
    <div>
        <li v-for="dataMahasiswa in mahasiswa" :key="dataMahasiswa._id.toString">
            ID: {{ dataMahasiswa._id }}<br>
            Nim: {{ dataMahasiswa.nim }}<br>
            Nama: {{ dataMahasiswa.nama }}<br>
            Prodi: {{ dataMahasiswa.prodi }}

        </li>
    </div>
</template>

<style scoped></style>
