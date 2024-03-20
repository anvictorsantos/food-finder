<template>
  <div class="flex flex-col p-8">
    <input
      type="text"
      name="search"
      id="search"
      class="w-full rounded border-2 border-gray-200"
      placeholder="Search your favorite meal 😋"
    />

    <div class="mt-2 flex gap-2">
      <router-link
        v-for="letter in letters"
        :key="letter"
        :to="{ name: 'byLetter', params: { letter } }"
      >
        {{ letter }}
      </router-link>
    </div>

    <!-- <pre>{{ ingredients }}</pre> -->
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

import axiosClient from "@/axiosClient";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  console.log(response.data);
  ingredients.value = response.data;
});
</script>
