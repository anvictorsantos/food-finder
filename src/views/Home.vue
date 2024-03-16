<template>
  <div class="flex flex-col p-8">
    <input
      type="text"
      name="search"
      id="search"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search your favorite meal 😋"
    />

    <div class="flex gap-2 mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter in letters"
        :key="letter"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import axiosClient from "@/axiosClient";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  console.log(response.data);
});
</script>
