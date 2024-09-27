import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import App from "./App.vue";
import router from "./router";

const i18n = createI18n({
  locale: "fr",
  fallbackLocale: "en",
  messages: {
    en: {
      recette: {
        recipes: "Recipes",
        category: "Category",
        recipeManagement: "Recipe Management",
        welcomeText: "Welcome to the Recipe Management System",
        listTitle: "List of Recipes",
        recipeCategory: "Category",
        actions: "Actions",

        addRecipe: "Add a Recipe",
        recipeTitlePlaceholder: "Enter the recipe title",
        recipeIngredientsPlaceholder: "Enter the recipe ingredients",
        starter: "Starter",
        mainCourse: "Main Course",
        dessert: "Dessert",
        selectCategory: "Select Category",
        selectType: "Select Type",

        editRecipe: "Edit Recipe",
        delete: "Delete",
        viewDetails: "View Details",
        recipeTitle: "Title",
        recipeType: "Type",
        ingredients: "Ingredients",
        addNewRecipe: "Add a New Recipe",
        save: "Save",
        recipeDetails: "Recipe Details",
      },

      listCategory: {
        showCategoryRecepes: "Recepes List",
        modify: "modify",
        added: "New Category",
        data: "No Registered Category",
      },

      recipeListCategory: {
        title: " Recipes List of  ",
      },
      editCategory: {
        title: "Edit Category",
        name: "Name",
        save: "Save",
      },
      addCategorie: {
        title: "New Category",
        name: "Name",
        submit: "Submit",
      },
    },
    fr: {
      recette: {
        recipes: "Recettes",
        category: "Catégories",
        recipeManagement: "Gestion des recettes",
        recipeCategory: "Catégorie",
        welcomeText: "Bienvenue dans le système de gestion des recettes",
        listTitle: "Liste des Recettes",
        actions: "Actions",

        addRecipe: "Ajouter une Recette",
        recipeTitlePlaceholder: "Entrer le titre de la recette",
        recipeIngredientsPlaceholder: "Entrer les ingrédients de la recette",
        selectType: "Choisir Type",
        starter: "Entrée",
        mainCourse: "Plat",
        dessert: "Dessert",
        selectCategory: "Choisir Catégorie",

        editRecipe: "Modifier la Recette",
        delete: "Supprimer",
        viewDetails: "Voir les Détails",
        recipeTitle: "Titre",
        recipeType: "Type",
        ingredients: "Ingrédients",
        addNewRecipe: "Ajouter une nouvelle Recette",
        save: "Enregistrer",
        recipeDetails: "Détails de la Recette",
      },
      listCategory: {
        showCategoryRecepes: "Liste de Recettes",
        modify: "Modifier",
        added: "Nouveau Catégorie",
        data: "Aucun Catégorie Enregistée",
      },

      recipeListCategory: {
        title: " Liste de Recettes de ",
      },
      editCategory: {
        title: "Modification de Catégorie",
        name: "Nom",
        save: "Enregister",
      },
      addCategorie: {
        title: "Nouveau Catégorie",
        name: "Nom",
        submit: "Soumettre",
      },
    },
  },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount("#app");
