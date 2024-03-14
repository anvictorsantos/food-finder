<template>
  <div class="flex p-8 justify-center">
    <input
      type="text"
      name="search"
      id="search"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search your favorite meal 😋"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import store from "@/store";

const meals = computed(() => store.state.meals);
</script>
