<template>
  <!-- <div v-if="users.loading"></div> -->
  <div>
    {{ result }}
  </div>
</template>

<script setup>
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';

// const CHARACTERS_QUERY = gql`
//   query Characters {
//     characters {
//       results {
//         id
//         name
//         image
//       }
//     }
//   }
// `;

// const { result, loading, error } = useQuery(CHARACTERS_QUERY);
const { result } = useQuery(gql`
  query Characters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`);

console.log(result.value);
</script>

<style scoped></style>
