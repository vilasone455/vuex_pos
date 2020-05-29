
<template >
  <div class="col-md-8 card padding-y-sm card">
    <span id="items">
      <div class="row">
        <product
          v-for="(p,index) in products"
          :key="p.pro_name"
          :pro_name="p.pro_name"
          :pro_price="p.pro_price"
          :pro_img="p.pro_img"
          :pro_index="index"
        />
      </div>
    </span>
  </div>
</template>

<script>
//
import { mapState } from "vuex";
import product from "./product.vue";
//import $ from "../assets/js/jquery-2.0.0.min.js";
//import {} from "../assets/js/bootstrap.bundle.min.js";
//import {  } from "../assets/js/OverlayScrollbars.js";

export default {
  name: "products",
  props: {},

  mounted : function(){
    console.log("start products");
 
  },

  components: {
    product
  },


  computed: {
    ...mapState({
      products: state => state.Products.products
    })
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/bootstrap.css";
@import "../assets/css/ui.css";
@import "../assets/fonts/fontawesome/css/fontawesome-all.min.css";
@import "../assets/css/OverlayScrollbars.css";


</style>




