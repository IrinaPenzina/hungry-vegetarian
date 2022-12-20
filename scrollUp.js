var scrollUp = new Vue({
  el: "#scrollUp", 

  // export default {
  //   name: "scrollUp",
    data() {
      return {
        showScrollToTopButton: false,
      };
    },
    methods: {
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    mounted() {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          this.showScrollToTopButton = true;
        } else {
          this.showScrollToTopButton = false;
        }
      });
    },
  })
