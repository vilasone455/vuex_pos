<template>
  <div class="col-md-3">
    <figure class="card card-product">
      <span class="badge-new">NEW</span>
      <div class="img-wrap">
        <img :src="pro_img" />
        <a class="btn-overlay" href="#">
          <i class="fa fa-search-plus"></i> Quick view
        </a>
      </div>
      <figcaption class="info-wrap">
        <a href="#" class="title">{{pro_name}}</a>
        <div class="action-wrap">
          <a href="#" class="btn btn-primary btn-sm float-right" @click="addtocart(product)">
            <i class="fa fa-cart-plus"></i> Add
          </a>
          <div class="price-wrap h5">
            <span class="price-new">{{pro_price}}</span>
          </div>
          <!-- price-wrap.// -->
        </div>
        <!-- action-wrap -->
      </figcaption>
    </figure>
    <!-- card // -->
  </div>
  <!-- col // -->
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "product",
  props: {
    pro_name: String,
    pro_price: Number,
    pro_index: Number,
    pro_img : String
  },

  computed : {
    product : function(){
      var pro = {
        pro_name : this.pro_name,
        pro_price : this.pro_price,
        pro_img : this.pro_img,
        index : this.pro_index
      };
      return pro;
    }

  },

  methods: {
    ...mapActions("Cart", ["addtocart"]),
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/bootstrap.css";
@import "../assets/css/ui.css";
@import "../assets/fonts/fontawesome/css/fontawesome-all.min.css";
@import "../assets/css/OverlayScrollbars.css";
</style>

