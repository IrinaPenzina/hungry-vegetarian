new Vue({
  el: "#app",
  data: {
    tabs: {
      "Breakfast": {
        recipes : [
          {
            url: "blinchiki.html",
            image: "blinchiki/img/blinchiki.jpg",
            name: "Blinchiki - Russian Pancakes",
            body:
              "Blinchiki, my favorite breakfast from my childhood! You can make them with different fillings or just on their own. They are perfect for a slow weekend morning.",
          },
          // {
          //   url: "#",
          //   image: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          //   name: "Awesome Title",
          //   body:
          //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!",
          // },
          // {
          //   url: "#",
          //   image: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          //   name: "Awesome Title",
          //   body:
          //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!",
          // },
        ],
      },
      "Soup": {
        recipes : [
          {
            url: "borsch.html",
            image: "borsch/img/borsch.jpg",
            name: "Meatless Borsch",
            body:
              "Cheap, delicious, healthy! All in one - meet Borsch! This is one of my favorite soups in the world. No one has ever said this soup is just “okay” after trying it!",
          },
          {
            url: "pea-soup.html",
            image: "pea-soup/img/soup-spoon.jpg",
            name: "Vegan Pea Soup",
            body:
              "Cheap and quick soup recipe. As a kid, I used to hate this soup… I couldn’t tell you why.  It’s delicious! As an adult, sometimes I crave it so badly that nothing can stop me from making it! Even on a hot summer night!",
          },
        ],
           },
      "Salad": {
        recipes : [
          {
            url: "olivier.html",
            image: "olivier/img/salad-mayo.jpg",
            name: "Russian Potato Salad - Olivier - Vegetarian",
            body:
              "It is my most favorite dish in the entire world! When I was little, I would choose this salad over cake! If you ask me today, I would still have it over any other food in the whole world. Not only because it tastes so delicious, but also because it's a traditional dish that we eat when we celebrate New Year's in Russia.  It reminds me of home and family.",
          },
          // {
          //   url: "#",
          //   image: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          //   name: "Amazing Title",
          //   body:
          //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!",
          // },
        ],
      },
      "Main": {
        recipes : [
          {
            url: "dumplings.html",
            image: "dumplings/img/cooked-soup.png",
            name: "Vegetarian Dumplings",
            body:
              "Vegetarian Dumplings that I love to make with my husband. It’s not just a delicious meal, but also a time wonderfully spent together. It is a great family tradition for a holiday to pull everyone together.",
          },
          // {
          //   url: "#",
          //   image: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          //   name: "Awesome",
          //   body:
          //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!",
          // },
        ],
      },
      "Dessert": {
        recipes : [
          // {
          //   url: "#",
          //   image: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          //   name: "Awesome Title",
          //   body:
          //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!",
          // },
          // {
          //   url: "#",
          //   image: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          //   name: "Awesome Title",
          //   body:
          //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!",
          // },
        ],
       },
      "Drink": {
        recipes : [
          // {
          //   url: "#",
          //   image: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          //   name: "Awesome Title",
          //   body:
          //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!",
          // },
          // {
          //   url: "#",
          //   image: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          //   name: "Awesome Title",
          //   body:
          //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!",
          // },
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
      props: ['url','image', 'name', 'body'],
    },
  },
})
