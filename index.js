new Vue({
  el: "#app",
  data: {
    tabs: {
      "Breakfast": {
        recipes : [
          {
            image: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            name: "Awesome Title",
            body:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!",
          },
          {
            image: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            name: "Awesome Title",
            body:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!",
          },
        ],
      },
      "Soup": {
        recipes : [
          {
            image: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            name: "Great Title",
            body:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!",
          },
          {
            image: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            name: "Great Title",
            body:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!",
          },
        ],
           },
      "Salad": {
        recipes : [
          {
            image: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            name: "Amazing Title",
            body:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!",
          },
          {
            image: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            name: "Amazing Title",
            body:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!",
          },
        ],
      },
      "Main": {
        recipes : [
          {
            image: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            name: "Awesome",
            body:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!",
          },
          {
            image: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            name: "Awesome",
            body:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!",
          },
        ],
      },
      "Dessert": {
        recipes : [
          {
            image: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            name: "Awesome Title",
            body:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!",
          },
          {
            image: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            name: "Awesome Title",
            body:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!",
          },
        ],
       },
      "Drink": {
        recipes : [
          {
            image: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            name: "Awesome Title",
            body:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!",
          },
          {
            image: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            name: "Awesome Title",
            body:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!",
          },
        ],

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
  components:{
    'TabContent': {
      props: {
        data: Object,
      },
    },
    'recipes': {
      props: ['image', 'name', 'body'],
    },
  },
})
