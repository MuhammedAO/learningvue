<template>
<select name="dropdown" id="dropdown" v-model="selectedOption" v-on:change="optionChanged">
<option value="null" disabled>Enter an option</option>
<option value="0">Option 1</option>
<option value="1">Option 2</option>
<option value="2">Option 3</option>
<option value="3">Option 4</option>
</select>
</template>

<script>
export default {
     name: 'Dropdown',

     //data inside a component needs to be a function that returns an object
     data: function (){
     return {
        selectedOption: null,
     }
     },

     methods: {
       optionChanged: function (value) {
          //emit calls an event, any component that wants to interact with this event must call this same event whereever it needs
            this.$emit('update:option', this.selectedOption)
        }
     }
}
</script>

<style>

</style>