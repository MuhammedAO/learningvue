import Vue from 'vue'
window.axios = require ('axios')
// import Accordion from './components/Accordion'
// import List from './components/List'

new Vue ({
el: '#app',

components: {
// Accordion,
// List,

},

mounted: async function  () {
 let res = await axios.get('https://jsonplaceholder.typicode.com/posts')
//   .then(res => console.log(res))
// console.log(res);
this.posts = res.data

},

data: {
    posts: null,
// items: [
// {title : 'Title 1', desc:'Description for title 1'},
// {title : 'Title 2', desc:'Description for title 2'},
// {title : 'Title 3', desc:'Description for title 3'}
// ]
}
});