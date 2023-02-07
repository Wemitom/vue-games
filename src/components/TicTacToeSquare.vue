<script setup lang="ts">
import { classNames } from "@/utils";

defineProps<{
  turn: "p1" | "p2";
  content: "X" | "O" | null;
  inPlay: boolean;
}>();
defineEmits(["update:square"]);
</script>

<template>
  <td
    @click="inPlay && $emit('update:square')"
    :class="
      classNames(
        'h-16 w-16 border text-4xl text-center border-gray-600',
        content || !inPlay ? '' : 'cursor-pointer'
      )
    "
  >
    <p
      v-if="content"
      :class="content === 'X' ? 'text-red-500' : 'text-blue-500'"
    >
      {{ content }}
    </p>
  </td>
</template>
