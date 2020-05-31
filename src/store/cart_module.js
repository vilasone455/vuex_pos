import { shopapi } from '../api'

const cartModule = {
    namespaced: true,
    state: {
      cart_data : {
        pay : 0,
        discount : 0,
        tax : 4,
      },
      openCalculator : false,
      cart_i : 1,
      carts: []
    },
    mutations: {
      ChangeQty (state, change_data) {
        var indexC = change_data.index;
        state.carts[indexC].qty++; 
        console.log(JSON.stringify(state.carts[indexC]))
      },

      newItemCart(state , pro){
        pro.qty = 1;
        state.carts.push(pro);
      },

      RemoveItem(state , i){
        state.carts.splice(i,1);
      },

      clear_cart(state){
        state.carts = [];
      }

    },

    getters: {

      getCart (state) {
        return state.carts
      },

      getCartData(state){
        return state.cart_data;
      },

      getTrueTotalPrice: (state , getters)=>{
        var total = getters.getSumCart
        var add_price_dis = total * (state.cart_data.discount/100);
        var add_price_tax = total * (state.cart_data.tax/100);
        total -= add_price_dis;
        return total - add_price_tax;
      },

      isHaveProductInCart: (state) => (product) => {
        var isHave = false;
        state.carts.forEach(c => {
          if(c.pro_name === product.pro_name){
            isHave = true;
          }
        });
        return isHave;
      },

      getSumCart(state){
        return state.carts.reduce(function (acc , obj) {
          acc += obj.pro_price * obj.qty;
          return acc  
        },0)
      },

      isCharge(state){
        return state.openCalculator
      }

    },

    actions: {

          addtocart:(context, datas)=> {
            console.log("send data : " + JSON.stringify(datas)) 
            if(!context.getters.isHaveProductInCart(datas)){
              context.commit('newItemCart', datas)
            }else{
              console.log("no have")
            }
          },

          addqty ({ commit }, datas) {
            commit('ChangeQty', datas)
          },

          removeitem({ commit }, datas) {
            commit('RemoveItem', datas)
          },

          clear_cart:(context)=>{
            context.commit("clear_cart")
          },

          charge:(context)=>{
            context.state.openCalculator = true;
            console.log("charge action : " + context.state.openCalculator)
          },

          async checkout(context , value){

            var bill_data = {};
            bill_data.sell_list = context.getters.getCart;
            bill_data.sell_id = 1000; //hardcode
            bill_data.bill_status = "paid";
            bill_data.pay_money = value;
            bill_data.bill_date = new Date().getTime(); 

            bill_data.sell_list.forEach(function(v){ delete v.pro_name ; delete v.pro_img });

            var res = await shopapi.checkout(bill_data);

            console.log(JSON.stringify(res));

            context.commit("clear_cart");
            //if print_confrim =>window.print 

          }
    }

  }
  
  export default cartModule