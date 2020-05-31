<template>
    <div id="cal" v-if="isOpen" class="cal_com">
			<div>
				<div class="calculator">
					<div class="answer">{{ answer }}</div>
					<div class="display">{{ logList + current }}</div>
					<div id="clear" class="btn operator">C</div>
					<div id="sign" class="btn operator">+/-</div>
					<div id="percent" class="btn operator">
						%
					</div>
					<div  id="divide" class="btn operator">
						/
					</div>
					<div @click="pressnum('7')" class="btn">7</div>
					<div @click="pressnum('8')" class="btn">8</div>
					<div @click="pressnum('9')" class="btn">9</div>
					<div id="times" class="btn operator">*</div>
					<div @click="pressnum('4')" class="btn">4</div>
					<div @click="pressnum('5')" class="btn">5</div>
					<div @click="pressnum('6')" class="btn">6</div>
					<div id="minus" class="btn operator">-</div>
					<div @click="pressnum('1')" class="btn">1</div>
					<div @click="pressnum('2')" class="btn">2</div>
					<div @click="pressnum('3')" class="btn">3</div>
					<div id="plus" class="btn operator">+</div>
					<div @click="pressnum('0')" id="n0" class="zero">0</div>
					<div id="dot" class="btn">.</div>
					<div id="equal" class="btn operator" @click="save">=</div>
				</div>
			</div>
		</div>
</template>

<script>

import { mapGetters } from "vuex";

export default {
  name: "calculator",
  props: {
    cal_value: String,
    isOpen : Boolean 
  },
  data() {
    return {
      numbers : ["1","2","3","4","5","6","7","8","9"],
      logList: "",
      current: "",
      answer: "",
      operatorClicked: true,
      onOpen : false
    };
  },


  computed : {
  ...mapGetters("Cart",["isCharge"]),
  sums:function(){
      return this.current
  }
  },
  methods: {
      pressnum(n){
          this.current += n;
      },
      save(){     
        this.$emit("onSaveData" , this.current);
        this.$emit("onClose");
      }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:300,500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::selection {
  background: none;
}

.cal_com{
  position: fixed;
  z-index: 999;
  top: -15%;
  right: 100%;

}


#cal {  
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  z-index: 999;
}

.calculator {
  display: grid;
  grid-template-rows: repeat(7, minmax(60px, auto));
  grid-template-columns: repeat(4, 60px);
  grid-gap: 12px;
  padding: 35px;
  font-family: "Poppins";
  font-weight: 300;
  font-size: 18px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 3px 80px -30px rgba(13, 81, 134, 1);
}

.btn,
.zero {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #484848;
  background-color: #f4faff;
  border-radius: 5px;
}

.display,
.answer {
  grid-column: 1 / 5;
  display: flex;
  align-items: center;
}

.display {
  color: #a3a3a3;
  border-bottom: 1px solid #e1e1e1;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: clip;
}

.answer {
  font-weight: 500;
  color: #146080;
  font-size: 55px;
  height: 65px;
}

.zero {
  grid-column: 1 / 3;
}

.operator {
  background-color: #d9efff;
  color: #3fa9fc;
}
</style>

