<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

const menuActif = ref('home')

const changeMenu = (val) => {
  menuActif.value = val
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <RouterLink class="nav-link" to="/">
          <img src="./assets/img.jpg" alt="Logo de l'application"/>
        </RouterLink>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item me-3">
              <RouterLink class="nav-link fw-bold" to="/Liste" :class="{'active': menuActif === 'recette' }" @click="changeMenu('recette')">Recettes</RouterLink>
            </li>
            <li class="nav-item me-3">
              <RouterLink class="nav-link fw-bold" :class="{'active': menuActif === 'categories'}" @click="changeMenu('categories')" :to="{name: 'categories'}">Catégories</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <div class="container contenu">
    <RouterView />
  </div>
</template>

<style scoped>
img {
  width: 70px;
}

.nav-link.active{
  color: red;
}
</style>
