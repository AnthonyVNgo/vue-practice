import { createApp, provide, h } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import App from './App.vue';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client/core';

import './assets/main.css';

const httpLink = createHttpLink({
  uri: 'https://rickandmortyapi.com/graphql'
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

// createApp(App).mount('#app');
// const app = createApp({
createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App)
}).mount('#app');
