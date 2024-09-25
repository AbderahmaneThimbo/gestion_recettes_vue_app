import { createRouter, createWebHistory } from "vue-router";

import Home from "@/components/Home.vue";
import ListeRecettes from "@/components/ListeRecettes.vue";
import AjouterRecette from "@/components/AjouterRecette.vue";
import ModifierRecette from "@/components/ModifierRecette.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/Liste",
      component: ListeRecettes,
    },
    {
      path: "/ajouter",
      component: AjouterRecette,
    },
    {
      path: "/modifier",
      component: ModifierRecette,
    },
  ],
});

export default router;
