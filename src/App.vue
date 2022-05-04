<template>
  <div id="app">
    Tet
  </div>
</template>

<script>
import gql from 'graphql-tag'
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return {
      categories: []
    }
  },
  components: {

  },
  apollo: {
    // Simple query that will update the 'hello' vue property
    categories: gql`query {
      categories{
        name
        id
      }
    }`,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
