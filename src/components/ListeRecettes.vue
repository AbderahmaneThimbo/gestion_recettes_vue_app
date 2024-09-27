<template>
  <div class="container mt-5">
    <h2 class="text-center mb-2 fw-bold">{{ $t("recette.listTitle") }}</h2>
    <div class="container d-flex justify-content-end">
      <RouterLink class="btn btn-primary mt-3 mb-3" to="/ajouter">
        {{ $t("recette.addRecipe") }}
      </RouterLink>
    </div>
    <table class="table table-hover">
      <thead class="table-success">
        <tr>
          <th>{{ $t("recette.recipeTitle") }}</th>
          <th>{{ $t("recette.recipeType") }}</th>
          <th class="text-center">{{ $t("recette.actions") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="recette in recettes" :key="recette.id">
          <td>{{ recette.titre }}</td>
          <td>{{ recette.type }}</td>
          <td class="text-center">
            <button
              class="btn btn-info btn-sm me-2"
              @click="store.getRecette(recette)"
              data-bs-toggle="modal"
              data-bs-target="#voirRecetteModal"
            >
              <i class="fas fa-eye"></i>
            </button>
            <button
              class="btn btn-warning btn-sm me-2"
              @click="store.getRecette(recette)"
            >
              <RouterLink to="/modifier">
                <i class="fas fa-edit"></i>
              </RouterLink>
            </button>
            <button
              class="btn btn-danger btn-sm"
              @click="store.removeRecette(recette.id)"
            >
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div
      class="modal fade"
      id="voirRecetteModal"
      tabindex="-1"
      aria-labelledby="voirRecetteModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="voirRecetteModalTitle">
              {{ $t("recette.recipeDetails") }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p><strong>Id:</strong> {{ store.recette.id }}</p>
            <p>
              <strong>{{ $t("recette.recipeTitle") }}:</strong>
              {{ store.recette.titre }}
            </p>
            <p>
              <strong>{{ $t("recette.ingredients") }}:</strong>
              {{ store.recette.ingredients }}
            </p>
            <p>
              <strong>{{ $t("recette.recipeType") }}:</strong>
              {{ store.recette.type }}
            </p>
            <p>
              <strong>{{ $t("recette.recipeCategory") }}:</strong>
              {{ store.recette.categorie_id }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRecetteStore } from "@/stores/recette";
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";

const { t } = useI18n();
const store = useRecetteStore();
const recettes = store.recettes;

onMounted(() => {
  store.loandRecetteData();
  store.loandCategorieData();
});
</script>
