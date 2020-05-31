
<template >

<div class="print">


</div>

</template>

<script>


export default {
  name: 'print',
  props: {

  },

  methods : {
     
  }
}
</script>

<style scoped>

.print {
  display: none;
}

@media print 
{
.print{display: block;}
#app{display: none;}
}

</style>


