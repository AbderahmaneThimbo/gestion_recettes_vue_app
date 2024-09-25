<template>
  <div>
    <h3 class="text-center fw-bold mt-4">{{ $t('recette.addNewRecipe') }}</h3>
    <form @submit.prevent="ajouterRecette">
      <div class="mb-3">
        <label for="titre" class="form-label">{{ $t('recette.recipeTitle') }}</label>
        <input
          type="text"
          class="form-control"
          id="titre"
          :placeholder="$t('recette.recipeTitlePlaceholder')"
          v-model="nouvelleRecette.titre"
          required
        />
      </div>
      <div class="mb-3">
        <label for="ingredient" class="form-label">{{ $t('recette.ingredients') }}</label>
        <textarea
          class="form-control"
          id="ingredient"
          :placeholder="$t('recette.recipeIngredientsPlaceholder')"
          v-model="nouvelleRecette.ingredient"
          required
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="type" class="form-label">{{ $t('recette.recipeType') }}</label>
        <select class="form-select" id="type" v-model="nouvelleRecette.type" required>
          <option value="Entrée">{{ $t('recette.starter') }}</option>
          <option value="Plat">{{ $t('recette.mainCourse') }}</option>
          <option value="Dessert">{{ $t('recette.dessert') }}</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary w-25">{{ $t('recette.save') }}</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRecetteStore } from "@/stores/recette";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const store = useRecetteStore();
const router = useRouter(); 

const nouvelleRecette = ref({
  titre: "",
  ingredient: "",
  type: "",
});

const ajouterRecette = () => {
  store.addRecette({ ...nouvelleRecette.value });
  nouvelleRecette.value = {
    titre: "",
    ingredient: "",
    type: "",
  };
  router.push("/liste");
};
</script>
