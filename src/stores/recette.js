import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useRecetteStore = defineStore("recette", () => {
  const route = useRouter();

  const recette = ref({
    id: 0,
    titre: "",
    ingredient: "",
    type: "",
    categorie: "",
  });
  const categorie = ref("");

  const categories = ref([
    "Categorie A",
    "Categorie B",
    "Categorie C",
    "Categorie D",
  ]);
  const recettes = ref([
    {
      id: 1,
      titre: "Salade de fruits",
      ingredient: "Fruits divers, jus de citron, miel",
      type: "Entrée",
      categorie: "Catégorie A",
    },
    {
      id: 2,
      titre: "Lasagne",
      ingredient: "Pâtes à lasagne, sauce tomate, viande hachée, fromage",
      type: "Plat",
      categorie: "Catégorie B",
    },
  ]);

  const getRecette = (index) => {
    recette.value = index;
  };

  const removeRecette = (index) => {
    recettes.value.splice(index, 1);
  };

  const addRecette = (obj) => {
    recettes.value.push(obj);
    route.push("/recette");
  };

  const editRecette = (obj) => {
    const index = obj.id - 1;
    recettes.value[index].titre = obj.titre;
    recettes.value[index].ingredient = obj.ingredient;
    recettes.value[index].type = obj.type;
    route.push("/recette");
  };

  const getCategorie = (categorie) => {
  categories.value = categorie;
  };

  const removeCategorie = (index) => {
    categories.value.splice(index, 1);
  };

  const addCategorie = (obj) => {
    categories.value.push(obj);
    route.push("/categories");
  };

  const editCategorie = (index) => {
    categories.value[index] = categorie.value
    route.push("/categories");
  };

  return {
    recettes,
    recette,
    categorie,
    categories,
    getRecette,
    removeRecette,
    addRecette,
    editRecette,
    getCategorie,
    removeCategorie,
    addCategorie,
    editCategorie
  };
});
