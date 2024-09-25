<template>
    <div v-if="recette">
      <h3 class="text-center fw-bold mt-4">Modifier la Recette</h3>
      <form @submit.prevent="store.editRecette(store.recette)">
        <div class="mb-3">
          <label for="titre" class="form-label">Titre</label>
          <input
            type="text"
            id="titre"
            v-model="store.recette.titre"
            class="form-control"
            placeholder="Entrer le titre de la recette"
            required
          />
        </div>
        <div class="mb-3">
          <label for="ingredient" class="form-label">Ingrédients</label>
          <textarea
            id="ingredient"
            v-model="store.recette.ingredient"
            class="form-control"
            placeholder="Entrer les ingrédients de la recette"
            required
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="type" class="form-label">Type de recette</label>
          <select id="type" v-model="store.recette.type" class="form-control" required>
            <option value="Entrée">Entrée</option>
            <option value="Plat">Plat</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        <RouterLink type="submit" class="btn btn-primary w-25" to="/liste">Enregistrer
                </RouterLink> 
      </form>
    </div>
  </template>
  
  <script setup>
  import { useRecetteStore } from "@/stores/recette";
  import { useI18n } from "vue-i18n";

  
  const { t } = useI18n();
  const store = useRecetteStore();
  const recette = store.recette;
  </script>
       