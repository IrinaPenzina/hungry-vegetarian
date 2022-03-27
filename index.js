new Vue({
  el: "#app",
  data: {
    tabs: {
      "Breakfast": {
        recipes : [
          {
            url: "blinchiki.html",
            image: "images/blinchiki/img/blinchiki.jpg",
            name: "Blinchiki - Russian Pancakes",
            body:
              "Blinchiki, my favorite breakfast from my childhood! You can make them with different fillings or just on their own. They are perfect for a slow weekend morning.",
          },
          {
            url: "oatmeal.html",
            image: "images/oatmeal/img/close.jpg",
            name: "Oatmeal with Coconut Milk",
            body:
              "It takes only 5 minutes and 3 ingredients to make this oatmeal. It's delicious, fast, and healthy. Doesn't it sound like a perfect weekday breakfast?!",
          },
          {
            url: "syrniki.html",
            image: "images/syrniki/img/syrniki.jpg",
            name: "Syrniki - Cheese Pancakes",
            body:
              "If you have cottage cheese sitting in your fridge, this recipe is 100% for you. It's super easy to make. My husband doesn't like cottage cheese, but he loves syrniki.",
          },
        ],
      },
      "Soup": {
        recipes : [
          {
            url: "borsch.html",
            image: "images/borsch/img/borsch.jpg",
            name: "Meatless Borsch",
            body:
              "Cheap, delicious, healthy! All in one - meet Borsch! This is one of my favorite soups in the world. No one has ever said this soup is just “okay” after trying it!",
          },
          {
            url: "pea-soup.html",
            image: "images/pea-soup/img/soup-spoon.jpg",
            name: "Vegan Pea Soup",
            body:
              "Cheap and quick soup recipe. As a kid, I used to hate this soup… I couldn’t tell you why.  It’s delicious! As an adult, sometimes I crave it so badly that nothing can stop me from making it! Even on a hot summer night!",
          },          
          {
            url: "ramen.html",
            image: "images/ramen/img/ramen.jpg",
            name: "Ramen with Tofu",
            body:
              "This soup has the most delicious broth in the world! It is so good… and a little bit spicy! 🌶🔥 Ramen, just like at a restaurant! This recipe does require effort and attention, but it is rewarding in the end.",
          },
          {
            url: "pickle-soup.html",
            image: "images/pickle-soup/img/bowl-s.jpg",
            name: "Russian Pickle Soup - Rassolnik",
            body:
              "This is a vegetarian recipe for Russian Pickle Soup (Rassolnik), a traditional Russian cuisine. The most important ingredients for this soup are… the pickled cucumbers and pickle juice! It’s not your average soup. Try this one!",
          },
        ],
           },
      "Salad": {
        recipes : [
          {
            url: "olivier.html",
            image: "images/olivier/img/salad-mayo.jpg",
            name: "Russian Potato Salad - Olivier - Vegetarian",
            body:
              "It is my most favorite dish in the entire world! When I was little, I would choose this salad over cake! If you ask me today, I would still have it over any other food in the whole world. Not only because it tastes so delicious, but also because it's a traditional dish that we eat when we celebrate New Year's in Russia.  It reminds me of home and family.",
          },
        ],
      },
      "Main": {
        recipes : [
          {
            url: "dumplings.html",
            image: "images/dumplings/img/cooked-soup.jpg",
            name: "Vegetarian Dumplings",
            body:
              "Vegetarian Dumplings that I love to make with my husband. It’s not just a delicious meal, but also a time wonderfully spent together. It is a great family tradition for a holiday to pull everyone together.",
          },
          {
            url: "spinach-pasta.html",
            image: "images/spinach-pasta/img/plate.jpg",
            name: "Creamy Spinach Pasta",
            body:
              "Ingredients for Creamy Spinach Pasta are usually sitting in your fridge. Surprisingly when you put all of them together in one dish it turns out really good. I'm working on not having the second plate. Well, it did not work with this pasta. Yum!",
          },
          {
            url: "chili.html",
            image: "images/chili/img/ready.jpg",
            name: "What-the-Heck’s in My Pantry Vegetarian Chili",
            body:
              "An extremely delicious Chili! To cook this meal, we used almost all the random cans from the pantry that had been sitting there for years. The amount we cooked out of the ingredients I listed is enough for a party.",
          },
          {
            url: "street-noods.html",
            image: "images/street-noods/img/fried-noods.jpg",
            name: "Shanghai Street Noods",
            body:
              "Shanghai street noodles have a very special place in my heart. My love for it is unconditional, even if I spent long hours in the bathroom the next day. There's nothing that can beat the best food in the world. This is our humble attempt to bring Shanghai Street Noodles to life on the opposite side of the world.",
          },
          // {
          //   url: "mashed_potatoes.html",
          //   image: "images/mashed_potatoes/img/ready.jpg",
          //   name: "Mashed Potatoes",
          //   body:
          //     "Good old mashed potatoes. Everyone has their recipe. That's how my husband and I make it. I felt like I had to write it down to remember the exact measurements we usually use. ",
          // },
        ],
      },
      "Dessert": {
        recipes : [
          {
            url: "bawirsaq.html",
            image: "images/bawirsaq/img/bawirsaq.jpg",
            name: "Bawirsaq - Бауырһаҡ",
            body:
              "Bawirsaq (Бауырһаҡ) is a Bashkir national dessert that I used to have as a kid for many festivals. I simplified the recipe a little bit, but it still has the same taste as I remember it.",
          },
          {
            url: "cookie_cake.html",
            image: "images/cookie_cake/img/ready2_big.jpg",
            name: "Cookie Cake (no baking)",
            body:
              "Super easy to make, no need to bake! ...But you will have to wait over a night to eat it. All you need are just three ingredients plus one more - patience.",
          },
        ],
       },
      // "Drink": {
      //   recipes : [
      //     // {
      //     //   url: "#",
      //     //   image: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      //     //   name: "Awesome Title",
      //     //   body:
      //     //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!",
      //     // },
      //   ],
      // }
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
