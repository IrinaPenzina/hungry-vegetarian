import { pinia, useRecipeStore } from './pinia.js';

var tab = new Vue({
  el: "#tab",
  pinia: pinia,
  data: {
    activeTab: "Breakfast"
  },
  computed: {
    ...Pinia.mapState(useRecipeStore, ['tabs']),
    ...Pinia.mapState(useRecipeStore, ['filteredRecipes']),
    ...Pinia.mapState(useRecipeStore, ['searchQuery']),
    tabContent() {
      if (this.searchQuery !== '') {
        return this.filteredRecipes;
      }
      return this.filteredRecipes.filter(r => r.tab === this.activeTab);
    }
  },
  methods: {
    setTabActive(tab) {
      this.activeTab = tab;
    }
  },
  components:{
    'TabContent': {
      props: {
        data: Object,
      },
    },
    'recipes': {
      props: ['url','image', 'name', 'body'],
    },
  },
})
