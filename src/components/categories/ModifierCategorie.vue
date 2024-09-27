<template>
  <div class="container">
    <h3 class="text-center fw-bold">{{ $t("editCategory.title") }}</h3>
    <form @submit.prevent="updateRecipe">
      <div class="mb-3">
        <label for="recipeName" class="form-label">{{
          $t("editCategory.name")
        }}</label>
        <input
          v-model="stores.categorie"
          type="text"
          id="recipeName"
          class="form-control"
          required
        />
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        @click="stores.editCategorie(router.params.id)"
      >
        {{ $t("editCategory.save") }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { useRecetteStore } from "@/stores/recette";
import { ref } from "vue";
import { useRoute } from "vue-router";
useRoute;
const stores = useRecetteStore();
const router = useRoute();
</script>
