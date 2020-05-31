
<template>
  <div id="app">
    <div>
      <headers></headers>
      <section class="section-content padding-y-sm bg-default">
        <div class="container-fluid">
          <div class="row">
            <products></products>
            <carts></carts>
          </div>
        </div>
      </section>
    </div>
      <print></print>
  </div>
  
</template>

<script>
import headers from "./components/headers";
import products from "./components/products";
import carts from "./components/carts";
import print from "./components/print_cart";

export default {
  name: "App",

  components: {
    headers,
    products,
    carts,
    print
  }
};
</script>

<style>
@import "./assets/css/bootstrap.css";
@import "./assets/css/ui.css";
@import "./assets/css/OverlayScrollbars.css";



.avatar {
  vertical-align: middle;
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.bg-default,
.btn-default {
  background-color: #f2f3f8;
}
.btn-error {
  color: #ef5f5f;
}
</style>
