
<script setup>
import { useRecetteStore } from "@/stores/recette";
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const stores = useRecetteStore();

onMounted(() => {
  stores.loandCategorieData();
  stores.loandRecetteData();
});

const removeCategorie = (id) => {
  const confirm = window.confirm(t("recette.recipeConfirm"));
  if (confirm) {
    stores.removeCategorie(id);
  }
};
</script>


<template>
  <div class="container-fluid d-flex justify-content-center">
    <div class="container">
      <div class="container mt-3 d-flex justify-content-end">
        <router-link
          class="btn btn-primary mt-3 mb-3"
          :to="{ name: 'add-categorie' }"
        >
          {{ t("listCategory.added") }}
        </router-link>
      </div>

      <div class="row justify-content-center">
        <div
          v-if="stores.categories.length > 0"
          class="col-12 col-sm-6 mb-4 col-md-4 col-lg-3"
          v-for="(categorie, index) in stores.categories"
          :key="index"
        >
          <div class="card p-1" style="width: 100%">
            <router-link
              :to="{
                name: 'list-recettes-categorie',
                params: { id: categorie.id },
              }"
              @click="
                stores.nameCategory(index),
                  stores.recetteByCategorie(categorie.id)
              "
            >
              <img
                src="https://via.placeholder.com/150"
                class="card-img-top"
                alt="Categorie image"
              />
              <h5 class="card-title text-center fw-bold mt-4 mb-4">
                {{ categorie.nom }}
              </h5>
            </router-link>

            <div
              class="card-body d-flex justify-content-between align-items-center"
            >
              <router-link
                class="btn btn-sm btn-warning float-end"
                :to="{ name: 'edit-categorie', params: { id: categorie.id } }"
              >
                <i class="fas fa-edit"></i>
              </router-link>

              <button
                class="btn btn-sm btn-danger float-end"
                @click="removeCategorie(categorie.id)"
              >
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>

        <div v-else class="container">
          <h1 class="fw-bold text-center mt-5 text-danger">
            {{ t("listCategory.data") }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
