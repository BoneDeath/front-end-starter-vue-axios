<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import type { Mahasiswa } from '@/type/mahasiswa';
const mahasiswa = ref<Mahasiswa[]>([]);

async function getMahasiswa() {
    try {
        const response = await axios.get('http://localhost:3434/mahasiswa')
        mahasiswa.value = response.data;
    } catch (error) {
        console.log(error)
    }
}

getMahasiswa()
</script>

<template>
    <div>
        <li v-for="dataMahasiswa in mahasiswa">
            Nim: {{ dataMahasiswa.nim }}<br>
            Nama: {{ dataMahasiswa.nama }}<br>
            Prodi: {{ dataMahasiswa.prodi }}
        </li>
    </div>
</template>

<style scoped></style>
