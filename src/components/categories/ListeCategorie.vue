<script setup>
import { useRecetteStore } from "@/stores/recette";
import { reactive } from "vue";
import { useI18n } from "vue-i18n";

const t = useI18n();
const stores = useRecetteStore()
const imgCategories = reactive([
  { image: "/src/assets/img1.jpg", nom: "Cathégorie 1" },
  { image: "/src/assets/img2.jpg", nom: "Cathégorie 2" },
  { image: "/src/assets/img3.jpg", nom: "Cathégorie 3" },
]);
</script>

<template>
  <div class="container-fluid d-flex justify-content-center">
    <div class="container">
      <router-link class="btn btn-primary" :to="{name:'add-categorie'}">{{ $t('listCategory.added') }}</router-link>
      <div class="row justify-content-center">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3"
          v-for="(categorie, index) in stores.categories"
          :key="index"
          v-if="stores.categories.length > 0"
        >
          <div class="card m-3 p-1" style="width: 100%">
            <router-link
              :to="{ name: 'list-recettes-categorie', params: { id: index } }"
            >
              <img :src="categorie.image" class="card-img-top" alt="..." />
              <h5 class="card-title text-center fw-bold mt-4 mb-4">
                {{ categorie }}
              </h5>
            </router-link>
            <div
              class="card-body d-flex justify-content-between  align-items-center"
            >
              <router-link 
                class="btn btn-sm btn-warning float-end"
                :to="{ name: 'edit-categorie', params: { id: index } }"
              >
                <i class="fas fa-edit"></i>
              </router-link>
              <button class="btn btn-sm btn-danger float-end " @click="stores.removeCategorie(index)">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="container" v-else>
         <h1 class="fw-bold text-center mt-5 text-danger" >{{ $t('listCategory.data') }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
