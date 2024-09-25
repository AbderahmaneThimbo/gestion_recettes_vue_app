<template>
  <div v-if="recette">
    <h3 class="text-center fw-bold mt-4">{{ $t('recette.editRecipe') }}</h3> 
    <form @submit.prevent="store.editRecette(store.recette)">
      <div class="mb-3">
        <label for="titre" class="form-label">{{ $t('recette.recipeTitle') }}</label> 
        <input
          type="text"
          id="titre"
          v-model="store.recette.titre"
          class="form-control"
          :placeholder="$t('recette.recipeTitlePlaceholder')"
          required
        />
      </div>
      <div class="mb-3">
        <label for="ingredient" class="form-label">{{ $t('recette.ingredients') }}</label> 
        <textarea
          id="ingredient"
          v-model="store.recette.ingredient"
          class="form-control"
          :placeholder="$t('recette.recipeIngredientsPlaceholder')" 
          required
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="type" class="form-label">{{ $t('recette.recipeType') }}</label> 
        <select id="type" v-model="store.recette.type" class="form-control" required>
          <option value="Entrée">{{ $t('recette.starter') }}</option> 
          <option value="Plat">{{ $t('recette.mainCourse') }}</option> 
          <option value="Dessert">{{ $t('recette.dessert') }}</option> 
        </select>
      </div>
      <RouterLink type="submit" class="btn btn-primary w-25" to="/liste">{{ $t('recette.save') }}</RouterLink> 
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
