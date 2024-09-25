import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import App from './App.vue'
import router from './router'

const i18n = createI18n({
    locale: 'fr',
    fallbackLocale: 'en',
    messages: {
        en: {
            message: {
                recipeManagement: 'Recipe Management',
                welcomeText: 'Welcome to the Recipe Management System',
                listTitle: 'List of Recipes',
                actions: 'Actions',
                addRecipe: 'Add a Recipe',
                edit: 'Edit',
                delete: 'Delete',
                viewDetails: 'View Details',
                recipeTitle: 'Title',
                recipeType: 'Type',
                ingredients: 'Ingredients',
                addNewRecipe: 'Add a New Recipe',
                save: 'Save',
                recipeDetails: 'Recipe Details',
            }
        },
        fr: {
            message: {
                recipeManagement: 'Gestion des recettes',
                welcomeText: 'Bienvenue dans le système de gestion des recettes',
                listTitle: 'Liste des Recettes',
                actions: 'Actions',
                addRecipe: 'Ajouter une Recette',
                edit: 'Modifier',
                delete: 'Supprimer',
                viewDetails: 'Voir les Détails',
                recipeTitle: 'Titre',
                recipeType: 'Type',
                ingredients: 'Ingrédients',
                addNewRecipe: 'Ajouter une nouvelle Recette',
                save: 'Enregistrer',
                recipeDetails: 'Détails de la Recette',
            }
        }
    }
})

  

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
