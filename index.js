new Vue({
  el: "#app",
  data: {
    message: "Hello",
    tabs: {
      "Breakfast": {
        title: "Awesome Title",
        body:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!"
      },
      "Soup": {
        title: "This is great",
        body:
          "Lorem ipsasdfasdfasd alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!"
      },
      "Salad": {
        title: "Look I'm a title!",
        body:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam aliasdfasdfaas architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!"
      },
      "Main": {
        title: "LOREM IPSUM?",
        body:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!"
      },
            "Dessert": {
        title: "LOREM IPSUM?",
        body:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!"
      },
            "Drink": {
        title: "LOREM IPSUM?",
        body:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!"
      }
    },
    activeTab: "Breakfast"
  },
  computed: {
    tabContent() {
      return this.tabs[this.activeTab];
    }
  },
  methods: {
    setTabActive(tab) {
      this.activeTab = tab;
    }
  },
  components: {
    TabContent: {
      props: {
        data: Object
      }
    }
  }
});
