<template>
  <div class="h-full bg-gray-100">
    <header class="flex h-16 items-stretch justify-between bg-white shadow">
      <router-link
        class="inline-flex h-full items-center px-5"
        :to="{ name: 'home' }"
        >Home</router-link
      >
      <div class="flex items-center gap-1">
        <router-link
          to="/"
          class="inline-flex h-full items-center px-2 transition-colors hover:bg-purple-100"
          >Search Meals</router-link
        >
        <router-link
          to="/"
          class="inline-flex h-full items-center px-2 transition-colors hover:bg-purple-100"
          >Meals by Letter</router-link
        >
        <router-link
          to="/"
          class="inline-flex h-full items-center px-2 transition-colors hover:bg-purple-100"
          >Meals by Ingredients</router-link
        >
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup></script>

<style scoped></style>
