import axios from "axios";
import { defineStore } from "pinia";

import { useRouter } from "vue-router";

// export const useRecetteStore = defineStore("recette", () => {
//   const route = useRouter();
//   const recette = ref({
//     titre: "",
//     ingredient: "",
//     type: "",
//     categorie: "",
//   });
//   const categorie = ref({ nom: "" });

//   const categories = ref([]);
//   const recettes = ref([]);

//   const loandRecetteData = () => {
//     axios
//       .get("http://127.0.0.1:3000/recettes")
//       .then((reponse) => {
//         recettes.value = reponse.data;
//       })
//       .catch((err) => (recette.value = []));
//   };

//   const removeRecette = (index) => {
//     axios
//       .delete(`http://127.0.0.1:3000/recettes/${index}`)
//       .then((reponse) => {
//         loandRecetteData();
//         return reponse;
//       })
//       .catch((err) => {});
//   };

//   const addRecette = (recette) => {
//     axios
//       .post("http://127.0.0.1:3000/recettes", recette)
//       .then((response) => {
//         console.log(response.data);
//         loandRecetteData();
//       })
//       .catch((err) => console.log(err));
//     route.push("/Liste");
//   };

//   const editRecette = (obj) => {
//     axios
//       .post("http://127.0.0.1:3000/recettes", recette)
//       .then((response) => {
//         console.log(response.data);
//         loandRecetteData();
//         route.push("/Liste");
//       })
//       .catch((err) => console.log(err));
//     route.push("/recette");
//   };

//   // :::::::::::::::::::::SECTION CATEGORIE::::::::::::::::
//   const loandCategorieData = () => {
//     axios
//       .get("http://127.0.0.1:3000/categories")
//       .then((reponse) => {
//         categories.value = reponse.data;
//       })
//       .catch((err) => (categories.value = []));
//   };

//   const getCategorie = (categorie) => {
//     categories.value = categorie;
//   };

//   const removeCategorie = (index) => {
//     axios
//       .delete(`http://127.0.0.1:3000/categories/${index}`)
//       .then((reponse) => {
//         loandCategorieData();
//         return reponse;
//       })
//       .catch((error) => {});
//   };

//   const addCategorie = (obj) => {
//     axios
//       .post(`http://127.0.0.1:3000/categories`, obj)
//       .then((reponse) => {
//         loandCategorieData();
//         return reponse;
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const editCategorie = (index) => {
//     categories.value[index] = categorie.value;
//     route.push("/categories");
//   };

//   return {
//     recettes,
//     recette,
//     categorie,
//     categories,
//     loandRecetteData,
//     loandCategorieData,
//     getRecette,
//     removeRecette,
//     addRecette,
//     editRecette,
//     getCategorie,
//     removeCategorie,
//     addCategorie,
//     editCategorie,
//   };
// });

export const useRecetteStore = defineStore("recette", {
  state: () => ({
    route: useRouter(),
    recette: {
      titre: "",
      ingredient: "",
      type: "",
      categorie: "",
    },
    categorie: {
      nom: "",
    },
    categories: [],
    recettes: [],
  }),

  actions: {
    loandRecetteData() {
      axios
        .get("http://127.0.0.1:3000/recettes")
        .then((reponse) => {
          this.recettes = reponse.data;
        })
        .catch((err) => {
          this.recettes = [];
          console.log(err);
        });
    },

    removeRecette(index) {
      axios
        .delete(`http://127.0.0.1:3000/recettes/${index}`)
        .then((reponse) => {
          this.loandRecetteData();
          return reponse;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    addRecette(recette) {
      axios
        .post("http://127.0.0.1:3000/recettes", recette)
        .then((response) => {
          console.log(response.data);
          this.loandRecetteData();
        })
        .catch((err) => {
          console.log(err);
        });
      this.route.push("/Liste");
    },

    editRecette(recette) {
      axios
        .post("http://127.0.0.1:3000/recettes", recette)
        .then((response) => {
          console.log(response.data);
          this.loandRecetteData();
          this.route.push("/Liste");
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // :::::::::::::::::::::SECTION CATEGORIE::::::::::::::::
    loandCategorieData() {
      axios
        .get("http://127.0.0.1:3000/categories")
        .then((reponse) => {
          this.categories = reponse.data;
        })
        .catch((err) => {
          this.categories = [];
          console.log(err);
        });
    },

    getCategorie(categorie) {
      this.categories = categorie;
    },

    removeCategorie(index) {
      axios
        .delete(`http://127.0.0.1:3000/categories/${index}`)
        .then((reponse) => {
          this.loandCategorieData();
          return reponse;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    addCategorie(obj) {
      axios
        .post(`http://127.0.0.1:3000/categories`, obj)
        .then((reponse) => {
          this.loandCategorieData();
          return reponse;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    editCategorie(index) {
      this.categories[index] = this.categorie;
      this.route.push("/categories");
    },
  },
});
