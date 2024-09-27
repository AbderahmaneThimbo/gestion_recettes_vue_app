<!-- <template>
  <div>
    <h3 class="text-center fw-bold mt-4">{{ $t("recette.addNewRecipe") }}</h3>
    <form @submit.prevent="ajouterRecette">
      <div class="mb-3">
        <label for="type" class="form-label">{{
          $t("recette.recipeCategory")
        }}</label>

        <select v-model="store.recette.categorie" class="form-control" required>
          <option value="" selected>
            {{ $t("recette.selectCategory") }}
          </option>
          <option
            v-for="(categorie, index) in store.categories"
            :key="index"
            :value="categorie.id"
          >
            {{ categorie.nom }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label for="titre" class="form-label">{{
          $t("recette.recipeTitle")
        }}</label>
        <input
          type="text"
          class="form-control"
          id="titre"
          :placeholder="$t('recette.recipeTitlePlaceholder')"
          v-model="store.recette.titre"
          required
        />
      </div>
      <div class="mb-3">
        <label for="ingredient" class="form-label">{{
          $t("recette.ingredients")
        }}</label>
        <textarea
          class="form-control"
          id="ingredient"
          :placeholder="$t('recette.recipeIngredientsPlaceholder')"
          v-model="store.recette.ingredient"
          required
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="type" class="form-label">{{
          $t("recette.recipeType")
        }}</label>
        <select
          class="form-select"
          id="type"
          v-model="store.recette.type"
          required
        >
          <option value="" selected>{{ $t("recette.selectType") }}</option>
          <option value="Entrée">{{ $t("recette.starter") }}</option>
          <option value="Plat">{{ $t("recette.mainCourse") }}</option>
          <option value="Dessert">{{ $t("recette.dessert") }}</option>
        </select>
      </div>

      <button type="submit" class="btn mb-4 btn-primary w-25">
        {{ $t("recette.save") }}
      </button>
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
  categorie: "",
});

const ajouterRecette = () => {
  store.addRecette();

  store.recette.titre = "";
  store.recette.ingredient = "";
  store.recette.type = "";
  store.recette.categorie = "";

  // nouvelleRecette.value = {
  //   titre: "",
  //   ingredient: "",
  //   type: "",
  //   categorie: "",
  // };
  // router.push("/Liste");
};
</script> -->


<script setup>
import { ref } from "vue";
import { useRecetteStore } from "@/stores/recette";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const store = useRecetteStore();
const router = useRouter();

// Objet local pour stocker les données de la nouvelle recette
const nouvelleRecette = ref({
  titre: "",
  ingredient: "",
  type: "",
  categorie: "",
});

// Fonction pour ajouter une recette
const ajouterRecette = () => {
  // Ajoute la recette via le store avec l'objet local
  store
    .addRecette(nouvelleRecette.value)
    .then(() => {
      // Réinitialise les champs après l'ajout
      nouvelleRecette.value = {
        titre: "",
        ingredient: "",
        type: "",
        categorie: "",
      };
      // Redirige vers la liste des recettes
      router.push("/Liste");
    })
    .catch((err) => {
      console.error("Erreur lors de l'ajout de la recette :", err);
    });
};
</script>


<template>
  <div>
    <h3 class="text-center fw-bold mt-4">{{ t("recette.addNewRecipe") }}</h3>
    <form @submit.prevent="ajouterRecette">
      <div class="mb-3">
        <label for="type" class="form-label">{{
          t("recette.recipeCategory")
        }}</label>
        <select
          v-model="nouvelleRecette.categorie"
          class="form-control"
          required
        >
          <option value="" selected>{{ t("recette.selectCategory") }}</option>
          <option
            v-for="(categorie, index) in store.categories"
            :key="index"
            :value="categorie.id"
          >
            {{ categorie.nom }}
          </option>
        </select>
      </div>

      <div class="mb-3">
        <label for="titre" class="form-label">{{
          t("recette.recipeTitle")
        }}</label>
        <input
          type="text"
          class="form-control"
          id="titre"
          :placeholder="t('recette.recipeTitlePlaceholder')"
          v-model="nouvelleRecette.titre"
          required
        />
      </div>

      <div class="mb-3">
        <label for="ingredient" class="form-label">{{
          t("recette.ingredients")
        }}</label>
        <textarea
          class="form-control"
          id="ingredient"
          :placeholder="t('recette.recipeIngredientsPlaceholder')"
          v-model="nouvelleRecette.ingredient"
          required
        ></textarea>
      </div>

      <div class="mb-3">
        <label for="type" class="form-label">{{
          t("recette.recipeType")
        }}</label>
        <select
          class="form-select"
          id="type"
          v-model="nouvelleRecette.type"
          required
        >
          <option value="" selected>{{ t("recette.selectType") }}</option>
          <option value="Entrée">{{ t("recette.starter") }}</option>
          <option value="Plat">{{ t("recette.mainCourse") }}</option>
          <option value="Dessert">{{ t("recette.dessert") }}</option>
        </select>
      </div>

      <button type="submit" class="btn mb-4 btn-primary w-25">
        {{ t("recette.save") }}
      </button>
    </form>
  </div>
</template>
