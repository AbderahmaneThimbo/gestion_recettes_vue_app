
<template>
  <div class="container">
    <h3 class="text-center fw-bold">{{ $t("editCategory.title") }}</h3>
    <form @submit.prevent="updateCategory">
      <div class="mb-3">
        <label for="categoryName" class="form-label">
          {{ $t("editCategory.name") }}
        </label>
        <input
          v-model="stores.categorie.nom"
          type="text"
          id="categoryName"
          class="form-control"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">
        {{ $t("editCategory.save") }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { useRecetteStore } from "@/stores/recette";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const stores = useRecetteStore();

const route = useRoute();
const router = useRouter();

const loadCategory = () => {
  const id = route.params.id;
  const category = stores.categories.find((cat) => cat.id === parseInt(id));
  if (category) {
    stores.categorie = { ...category };
  } else {
    console.error("Category not found");
  }
};

const updateCategory = () => {
  const id = route.params.id;
  stores.editCategorie(id);
  router.push("/categories");
};

onMounted(() => {
  stores.loandCategorieData();
  loadCategory();
});
</script>
