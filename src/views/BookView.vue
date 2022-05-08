<template>
  <div class="about">
    <h1>Book page {{ $route.params.id }}</h1>

    <ApolloQuery :query="require('@/graphql/queries/Book.js').default" :variables="{id: $route.params.id}">
        <template slot-scope="{ result: { data, loading }, isLoading }">
          <div v-if="isLoading">Loading...{{loading}}</div>
          <div v-else>
            <div>
              {{ data.book.title }}
            </div>
            <div>
              {{ data.book.author }}
            </div>
            <div>
              <img :src="`${data.book.image}`" alt="cover">
            </div>
          </div>
        </template>
      </ApolloQuery>

  </div>
</template>
