<script setup lang="ts">
import TicTacToeBoard from "@/components/TicTacToeBoard.vue";
import { ref, watch } from "vue";

const gameBoard = ref<("X" | "O" | null)[][]>([
  [null, null, null],
  [null, null, null],
  [null, null, null],
]);
const changeBoard = (row: number, col: number) => {
  if (!gameBoard.value[row][col]) {
    gameBoard.value[row][col] = turn.value === "p1" ? "X" : "O";
    changeTurn();
  }
};

const winCon = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const gameStatus = ref<"p1" | "p2" | "tie" | "play">("play");
watch(
  () => gameBoard.value,
  (newBoard) => {
    const flatBoard = ([] as ("X" | "O" | null)[][]).concat.apply([], newBoard);

    winCon.forEach((line) => {
      const [firstInd, secondInd, thirdInd] = line;

      if (
        flatBoard[firstInd] &&
        flatBoard[firstInd] === flatBoard[secondInd] &&
        flatBoard[firstInd] === flatBoard[thirdInd]
      ) {
        gameStatus.value = turn.value === "p1" ? "p2" : "p1";
      }
    });

    if (flatBoard.every((val) => val) && gameStatus.value === "play") {
      gameStatus.value = "tie";
    }
  },
  { deep: true }
);

const turn = ref<"p1" | "p2">("p1");
const changeTurn = () => (turn.value = turn.value === "p1" ? "p2" : "p1");

const getCurPlayerStr = (turn: "p1" | "p2") =>
  turn === "p1" ? "Player 1" : "Player 2";

const resetGame = () => {
  gameBoard.value = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  turn.value = "p1";
  gameStatus.value = "play";
};
</script>

<template>
  <main>
    <div class="w-full mt-12 flex flex-col items-center gap-6">
      <h2 class="text-3xl">
        {{
          gameStatus === "play"
            ? getCurPlayerStr(turn) + " turn"
            : gameStatus !== "tie"
            ? getCurPlayerStr(turn === "p1" ? "p2" : "p1") + " won"
            : "Players tied"
        }}
      </h2>
      <TicTacToeBoard
        :game-board="gameBoard"
        :turn="turn"
        :in-play="gameStatus === 'play'"
        :change-board="changeBoard"
      />
      <button
        v-if="gameStatus !== 'play'"
        class="rounded-md bg-red-600 p-4 text-white hover:bg-red-500"
        @click="resetGame()"
      >
        Play one more?
      </button>
    </div>
  </main>
</template>
