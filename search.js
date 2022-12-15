import { pinia, useRecipeStore } from './pinia.js';

var search = new Vue ({
  el: "#search",
  pinia: pinia,
  methods: {
    ...Pinia.mapActions(useRecipeStore, ['setSearch']),
    searching(e) {
      this.setSearch(e.target.value)
    }
  }
 });

