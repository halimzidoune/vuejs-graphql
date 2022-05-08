<template>
  <div class="home">
    <ApolloQuery :query="require('@/graphql/queries/Categories.js').default">
      <template slot-scope="{ result: { data, loading }, isLoading }">
        <div v-if="isLoading">Loading...{{loading}}</div>
        <div v-else>
          <a href="#"
            class="link-margin"
            @click.prevent="selectCategory('all')"
          >All</a>

          <a href="#"
            class="link-margin"
            @click.prevent="selectCategory('featured')"
          >Fetured</a>

          <a href="#" 
            v-for="category of data.categories"
            class="link-margin"
            :key="category.id"
            @click.prevent="selectCategory(category.id)"
          >{{ category.name }}</a>
        </div>
      </template>
    </ApolloQuery>

    <div v-if="fileQuery == 'Books'">
      <p>{{ selectedCategory }} - {{ fileQuery }}</p>
      <!-- Apollo Query -->
      <ApolloQuery :query="require('@/graphql/queries/'+fileQuery+'.js').default" >
        <template slot-scope="{ result: { data, loading }, isLoading }">
          <div v-if="isLoading">Loading...{{loading}}</div>
          <div v-else>
            <div v-for="book of data.books" :key="book.id">
              <router-link :to="`/book/${book.id}`" 
                class="link-margin"
              >{{ book.id }}. {{ book.title }}
              </router-link>
              <div>
                {{ book.author }}
              </div>
              <img :src="`${book.image}`" alt="cover">
            </div>
          </div>
        </template>
      </ApolloQuery>
    </div>

    <div v-if="fileQuery == 'FeaturedBooks'">
      <p>{{ selectedCategory }} - {{ fileQuery }}</p>
      
      <ApolloQuery :query="require('@/graphql/queries/'+fileQuery+'.js').default" :variables="{ featured: true }">
        <template slot-scope="{ result: { data, loading }, isLoading }">
          <div v-if="isLoading">Loading...{{loading}}</div>
          <div v-else>
          <div v-for="book of data.booksByFeatured" :key="book.id">
              <router-link :to="`/book/${book.id}`" 
                class="link-margin"
              >{{ book.id }}. {{ book.title }}
              </router-link>
              <div>
                {{ book.author }}
              </div>
              <img :src="`${book.image}`" alt="cover">
            </div>
          </div>
        </template>
      </ApolloQuery>
    </div>

    <div v-if="fileQuery == 'Category'">
      <p>{{ selectedCategory }} - {{ fileQuery }}</p>
      <ApolloQuery :query="require('@/graphql/queries/'+fileQuery+'.js').default" :variables="{id: selectedCategory}">
        <template slot-scope="{ result: { data, loading }, isLoading }">
          <div v-if="isLoading">Loading...{{loading}}</div>
          <div v-else>
            <div v-for="book of data.category.books" :key="book.id">
              <router-link :to="`/book/${book.id}`" 
                class="link-margin"
              >{{ book.id }}. {{ book.title }}
              </router-link>
              <div>
                {{ book.author }}
              </div>
              <img :src="`${book.image}`" alt="cover">
            </div>
          </div>
        </template>
      </ApolloQuery>
    </div>

  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'HomeView',
  data(){
    return {
      selectedCategory: 'all',
      fileQuery: 'Books'
    }
  },
  components: {

  },
  methods: {
    selectCategory(id){
      if(id=="all"){
        this.fileQuery = 'Books';
      }else if (id=="featured") {
        this.fileQuery = 'FeaturedBooks';
      }else{
        this.fileQuery = 'Category';
      }
      this.selectedCategory = id;
    }
  }
}
</script>

<style>
.link-margin {
    margin-right: 24px;
  }
</style>

