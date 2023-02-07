<script setup lang="ts">
import TicTacToeSquare from "./TicTacToeSquare.vue";

defineProps<{
  gameBoard: ("X" | "O" | null)[][];
  turn: "p1" | "p2";
  inPlay: boolean;
  changeBoard: (row: number, col: number) => void;
}>();
</script>

<template>
  <table class="border-collapse">
    <tr v-for="(row, rowInd) in gameBoard" :key="`row_${rowInd}`">
      <TicTacToeSquare
        v-for="(sqr, colInd) in row"
        :key="`sqr_${rowInd}_${colInd}`"
        :turn="turn"
        :content="sqr"
        :in-play="inPlay"
        @update:square="changeBoard(rowInd, colInd)"
      />
    </tr>
  </table>
</template>
