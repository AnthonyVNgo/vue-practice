<template>
  <div>
    <p v-if="error">Something went wrong...</p>
    <p v-if="loading">Loading...</p>
    <p
      v-else
      v-for="character in result.characters.results"
      :key="character.id">
      {{ character.name }}
    </p>
  </div>
</template>

<script setup>
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';

const { result, loading, error } = useQuery(gql`
  query getCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`);
</script>

<style scoped></style>
