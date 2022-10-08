<template>
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
</script>

<style scoped></style>
