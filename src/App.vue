<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>


    
  </div>
</template>

<script>
// import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Header,
    Footer
  },
  created() {
    // console.log(1, this.$axios);
    // console.log(2, axios);
  }
};
</script>

<style>
</style> 
