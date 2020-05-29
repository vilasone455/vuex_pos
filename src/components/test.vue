<template>
    <section class="header-main">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-3">
          <div class="brand-wrap">
            <img class="logo" src="https://www.freeiconspng.com/uploads/point-of-sale-icon-7.png" />
            <h2 class="logo-text">Topster POS</h2>
          </div>
          <!-- brand-wrap.// -->
        </div>
        <div class="col-lg-6 col-sm-6">
          <form action="#" class="search-wrap">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search" />
              <div class="input-group-append">
                <button class="btn btn-primary" type="submit">
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </div>
          </form>
          <!-- search-wrap .end// -->
        </div>
        <!-- col.// -->
        <div class="col-lg-3 col-sm-6">
          <div class="widgets-wrap d-flex justify-content-end">
            <div class="widget-header">
              <a href="#" class="icontext">
                <a href="#" class="btn btn-primary m-btn m-btn--icon m-btn--icon-only">
                  <i class="fa fa-home"></i>
                </a>
              </a>
            </div>
            <!-- widget .// -->
            <div class="widget-header dropdown">
              <a href="#" class="ml-3 icontext" data-toggle="dropdown" data-offset="20,10">
                <img src="../assets/images/avatars/avatar.jpg" class="avatar" alt />
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="#">
                  <i class="fa fa-sign-out-alt"></i> Logout
                </a>
              </div>
              <!--  dropdown-menu .// -->
            </div>
            <!-- widget  dropdown.// -->
          </div>
          <!-- widgets-wrap.// -->
        </div>
        <!-- col.// -->
      </div>
      <!-- row.// -->
    </div>
    <!-- container.// -->
  </section>
</template>

<script>
export default {
  name: 'test',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/bootstrap.css";
@import "../assets/css/ui.css";
@import "../assets/fonts/fontawesome/css/fontawesome-all.min.css";
@import "../assets/css/OverlayScrollbars.css";

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


