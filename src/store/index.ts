import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations, firestoreAction } from "vuexfire";
import { db } from "./firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    templates: [],
    globalVariables: []
  },

  getters: {
    templates: state => {
      return state.templates;
    }
  },

  mutations: {
    // other mutations
    ...vuexfireMutations
  },

  actions: {
    bindTemplates: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef("templates", db.collection("templates"));
    }),
    unbindTemplates: firestoreAction(({ unbindFirestoreRef }) => {
      unbindFirestoreRef("templates");
    })
  }
});
