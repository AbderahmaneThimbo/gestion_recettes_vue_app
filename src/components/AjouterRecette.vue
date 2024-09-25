<template>
  <div>
    <h3 class="text-center fw-bold mt-4">{{ $t('message.addNewRecipe') }}</h3>
    <form @submit.prevent="ajouterRecette">
      <div class="mb-3">
        <label for="titre" class="form-label">{{ $t('message.recipeTitle') }}</label>
        <input
          type="text"
          class="form-control"
          id="titre"
          placeholder="Entrer le titre de la recette"
          v-model="nouvelleRecette.titre"
          required
        />
      </div>
      <div class="mb-3">
        <label for="ingredient" class="form-label">{{ $t('message.ingredients') }}</label>
        <textarea
          class="form-control"
          id="ingredient"
          placeholder="Entrer les ingrédients de la recette"
          v-model="nouvelleRecette.ingredient"
          required
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="type" class="form-label">{{ $t('message.recipeType') }}</label>
        <select class="form-select" id="type" v-model="nouvelleRecette.type" required>
          <option value="Entrée">Entrée</option>
          <option value="Plat">Plat</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary w-25">{{ $t('message.save') }}</button>
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
