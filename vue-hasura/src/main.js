// import { createApp } from 'vue';
// import App from './App.vue';
// import {
//   ApolloClient,
//   createHttpLink,
//   InMemoryCache
// } from '@apollo/client/core';

// import './assets/main.css';

// // HTTP connection to the API
// const httpLink = createHttpLink({
//   // You should use an absolute URL here
//   uri: 'https://rickandmortyapi.com/graphql'
// });

// // Cache implementation
// const cache = new InMemoryCache();

// // Create the apollo client
// const apolloClient = new ApolloClient({
//   link: httpLink,
//   cache
// });

// createApp(App).mount('#app');

// main.js

import { createApp, provide, h } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import App from './App.vue';
import './assets/main.css';

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  // uri: '<https://rickandmortyapi.com/graphql>'
  uri: 'https://rickandmortyapi.com/graphql'
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App)
});

app.mount('#app');
