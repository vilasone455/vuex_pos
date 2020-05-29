<template>
  <div class="col-md-4">
    <div class="card">
      <span id="cart">
        <table class="table table-hover shopping-cart-wrap">
          <thead class="text-muted">
            <tr>
              <th scope="col">Item</th>
              <th scope="col" width="120">Qty</th>
              <th scope="col" width="120">Price</th>
              <th scope="col" class="text-right" width="200">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(c,index) in getCart" :key="index">
              <td>
                <figure class="media">
                  <div class="img-wrap">
                    <img  class="img-thumbnail img-xs" :src="c.pro_img" />
                  </div>
                  <figcaption class="media-body">
                    <h6 class="title text-truncate">{{c.pro_name}}</h6>
                  </figcaption>
                </figure>
              </td>
              <td class="text-center">
                <div
                  class="m-btn-group m-btn-group--pill btn-group mr-2"
                  role="group"
                  aria-label="..."
                >
                  <button type="button" class="m-btn btn btn-default">
                    <i class="fa fa-minus" @click="ajusQty(index,-1)"></i>
                  </button>
                  <button type="button" class="m-btn btn btn-default" disabled>{{c.qty}}</button>
                  <button type="button" class="m-btn btn btn-default">
                    <i class="fa fa-plus" @click="ajusQty(index,1)"></i>
                  </button>
                </div>
              </td>
              <td>
                <div class="price-wrap">
                  <var class="price">{{c.qty}}</var>
                </div>
                <!-- price-wrap .// -->
              </td>
              <td class="text-right" @click="removecart(index)">
                <a class="btn btn-outline-danger">
                  <i class="fa fa-trash"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </span>
    </div>
    <!-- card.// -->
    <div class="box">
      <dl class="dlist-align">
        <dt>Tax:</dt>
        <dd class="text-right">{{getCartData.tax}}%</dd>
      </dl>
      <dl class="dlist-align">
        <dt>Discount:</dt>
        <dd class="text-right">
          <a href="#">{{getCartData.discount}}%</a>
        </dd>
      </dl>
      <dl class="dlist-align">
        <dt>Sub Total:</dt>
        <dd class="text-right">{{getSumCart}}</dd>
      </dl>
      <dl class="dlist-align">
        <dt>Total:</dt>
        <dd class="text-right h4 b">{{getTrueTotalPrice}}</dd>
      </dl>
      <div class="row">
        <div class="col-md-6">
          <a href="#" class="btn btn-default btn-error btn-lg btn-block" @click="clear_cart">
            <i class="fa fa-times-circle"></i> Cancel
          </a>
        </div>
        <div class="col-md-6">
          <a href="#" class="btn btn-primary btn-lg btn-block">
            <i class="fa fa-shopping-bag"></i>
            Charge
          </a>
        </div>
      </div>
    </div>
    <!-- box.// -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "carts",
  props: {
    msg: String,
    cart_list: Array
  },
  computed: {
    ...mapGetters("Cart",["getSumCart" ,"getCart" , "getTrueTotalPrice" , "getCartData"])
  },
  methods: {
    ...mapActions("Cart", ["removeitem" ,"clear_cart"]),
    removecart: function(index) {
      this.removeitem(index);
    },
    ajusQty: function(index, v) {
      if (this.getCart[index].qty == 1 && v == -1) {
        this.removecart(index);
      } else {
        this.getCart[index].qty += v;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-default,
.btn-default {
  background-color: #f2f3f8;
}
.btn-error {
  color: #ef5f5f;
}

@import "../assets/css/bootstrap.css";
@import "../assets/css/ui.css";
@import "../assets/fonts/fontawesome/css/fontawesome-all.min.css";
@import "../assets/css/OverlayScrollbars.css";
</style>


