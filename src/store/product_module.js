const productModule = {
    namespaced: true,
    state: {
      products: [
      {pro_id : 1 , pro_name : "Iron" , pro_price : 20000 , pro_img : "https://i.ibb.co/WHHBbjT/1.jpg" },
      {pro_id : 2 , pro_name : "Mobile" , pro_price : 30000 , pro_img : "https://i.ibb.co/CMRdmJz/4.jpg"},
      {pro_id : 3 , pro_name : "BBag" , pro_price : 10000 , pro_img : "https://i.ibb.co/cynRXzv/3.jpg"},
      {pro_id : 4 , pro_name : "TeaMaker" , pro_price : 18000 , pro_img : "https://i.ibb.co/P4hLX0s/2.jpg"},
      {pro_id : 5 , pro_name : "SmartWatch" , pro_price : 13000 , pro_img : "https://i.ibb.co/WHHBbjT/1.jpg"}]
    },
    
    mutations: {},
    actions: {},

    getters: {
      getProducts (state) {
        return state.products
      }
    }
  }
  
  export default productModule