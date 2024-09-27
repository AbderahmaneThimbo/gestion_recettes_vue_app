<template>
    <div class="container">
      <h3 class=" text-center fw-bold">{{ $t('addCategorie.title') }}</h3>
      <form @submit.prevent="addRecipe">
        <div class="mb-3">
          <label for="recipeName" class="form-label">{{ $t('addCategorie.name') }}</label>
          <input v-model="categorie" type="text" id="recipeName" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-success" @click="addCategory">{{ $t('addCategorie.submit') }}</button>
      </form>
    </div>
  </template>
  
  <script setup>
import { useRecetteStore } from '@/stores/recette';
import { ref } from 'vue';

 const stores = useRecetteStore()
 const categorie = ref('')
  const addCategory = () => {
    stores.addCategorie(categorie)
  };
  </script>
  