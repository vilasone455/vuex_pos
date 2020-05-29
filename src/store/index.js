import Vue from 'vue'
import Vuex from 'vuex'
import cart_module from './cart_module'
import product_module from './product_module';

// Make vue aware of Vuex
Vue.use(Vuex)

const modules = {
  Cart: cart_module,
  Products : product_module
}

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  modules
})
