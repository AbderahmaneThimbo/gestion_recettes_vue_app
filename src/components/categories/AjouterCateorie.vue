 
<template>
  <div class="container">
    <h3 class="text-center fw-bold">{{ $t("addCategorie.title") }}</h3>
    <form @submit.prevent="addCategory">
      <div class="mb-3">
        <label for="categoryName" class="form-label">
          {{ $t("addCategorie.name") }}
        </label>
        <input
          v-model="categorie.nom"
          type="text"
          id="categoryName"
          class="form-control"
          required
        />
      </div>
      <button type="submit" class="btn btn-success">
        {{ $t("addCategorie.submit") }}
      </button>
    </form>
  </div>
</template>

<script setup>
import router from "@/router";
import { useRecetteStore } from "@/stores/recette";
import { ref } from "vue";

const stores = useRecetteStore();

const categorie = ref({ nom: "" });

const addCategory = () => {
  stores.addCategorie({ nom: categorie.value.nom });
  categorie.value.nom = "";

  router.push("/categories");
};
</script>
