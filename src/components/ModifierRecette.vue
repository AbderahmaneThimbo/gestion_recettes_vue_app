<template>
  <div v-if="recette">
    <h3 class="text-center fw-bold mt-4">{{ $t("recette.editRecipe") }}</h3>
    <form @submit.prevent="modifierRecette">
      <div class="mb-3">
        <label for="titre" class="form-label">{{
          $t("recette.recipeTitle")
        }}</label>
        <input
          type="text"
          id="titre"
          v-model="recette.titre"
          class="form-control"
          :placeholder="$t('recette.recipeTitlePlaceholder')"
          required
        />
      </div>
      <div class="mb-3">
        <label for="ingredient" class="form-label">{{
          $t("recette.ingredients")
        }}</label>
        <textarea
          id="ingredient"
          v-model="recette.ingredients"
          class="form-control"
          :placeholder="$t('recette.recipeIngredientsPlaceholder')"
          required
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="type" class="form-label">{{
          $t("recette.recipeType")
        }}</label>
        <select id="type" v-model="recette.type" class="form-control" required>
          <option value="Entrée">{{ $t("recette.starter") }}</option>
          <option value="Plat">{{ $t("recette.mainCourse") }}</option>
          <option value="Dessert">{{ $t("recette.dessert") }}</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="categorie" class="form-label">{{
          $t("recette.selectCategory")
        }}</label>
        <select
          id="categorie"
          v-model="recette.categorie_id"
          class="form-control"
          required
        >
          <option value="" disabled>{{ $t("recette.selectCategory") }}</option>
          <option
            v-for="(categorie, index) in store.categories"
            :key="index"
            :value="categorie.id"
          >
            {{ categorie.nom }}
          </option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary w-25">
        {{ $t("recette.save") }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { useRecetteStore } from "@/stores/recette";
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const router = useRouter();
const { t } = useI18n();
const store = useRecetteStore();
const recette = store.recette;

const modifierRecette = () => {
  store.editRecette();
  router.push("/Liste");
};

onMounted(() => {
  store.loandCategorieData();
  store.loandRecetteData();
});
</script>
