<template>
<div> 
<p>{{item.title}}</p>
<p @click="toggle = !toggle">Details</p>
<p v-if="toggle">{{item.desc}}</p>

</div>
</template>

<script>
export default {
    name: 'Accordion',
    props: ['item'],

data : function () {
   return {
   toggle: false
   }
}
}
</script>

<style scoped>

</style>


