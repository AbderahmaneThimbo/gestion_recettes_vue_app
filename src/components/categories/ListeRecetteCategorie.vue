<template>
  <div class="container">
    <h3 class="text-center w-100 mt-4 mb-3">
      {{ $t("recipeListCategory.title") }} 
    </h3>

    <table class="table table-hover">
      <thead class="table-success">
        <tr>
          <th>{{ $t("recette.recipeTitle") }}</th>
          <th>{{ $t("recette.recipeType") }}</th>
          <th class="text-center">{{ $t("recette.actions") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(recette, index) in recettes" :key="index">
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
              @click="store.removeRecette(index)"
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
              {{ store.recette.ingredient }}
            </p>
            <p>
              <strong>{{ $t("recette.recipeType") }}:</strong>
              {{ store.recette.type }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRecetteStore } from "@/stores/recette.js";
import { ref } from "vue";


const store = useRecetteStore()
const editRecipe = (recipe) => {
  // Rediriger vers le formulaire de modification
  console.log("Editer la recette", recipe);
};
</script>
