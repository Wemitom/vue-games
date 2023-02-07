<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="flex items-center flex-col gap-6">
    <h1 class="text-5xl font-bold mt-6">Game list</h1>
    <ul class="text-2xl">
      <li><RouterLink to="/tic-tac-toe">Tic tac toe</RouterLink></li>
      <li>Tic tac toe</li>
      <li>Tic tac toe</li>
      <li>Tic tac toe</li>
    </ul>
  </main>
</template>
