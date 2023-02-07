import TicTacToeVue from "@/views/TicTacToe.vue";
import GameListVue from "@/views/GameList.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: GameListVue,
    },
    {
      path: "/tic-tac-toe",
      component: TicTacToeVue,
    },
  ],
});

export default router;
