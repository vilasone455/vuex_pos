
<template>
  <div id="app">
    <div>
      <test></test>
      <section class="section-content padding-y-sm bg-default">
        <div class="container-fluid">
          <div class="row">
            <products></products>
            <carts></carts>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
import test from "./components/test";
import products from "./components/products";
import carts from "./components/carts";

export default {
  name: "App",

  components: {
    test,
    products,
    carts
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
