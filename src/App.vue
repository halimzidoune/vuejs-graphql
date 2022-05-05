<template>
  <div id="app">
    <!-- Apollo Query -->
    <ApolloQuery :query="require('@/graphql/queries/Categories.js').default">
      <template slot-scope="{ result: { data, loading }, isLoading }">
        <div v-if="isLoading">Loading...{{loading}}</div>
        <ul v-else>
          <li
            v-for="category of data.categories"
            class="user"
            :key="category.id"
          >{{ category.name }}</li>
        </ul>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
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
