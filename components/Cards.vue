<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-card
            v-for="n in 3"
            :key="n"
            class="ma-1 pa-2 row wrap align-center justify-center "
            outlined
            tile
          >
            <div v-if="n==1">
              <Card1 />
            </div>
            <div v-if="n==2">
              <Card2 />
            </div>
            <div v-if="n==3">
              <Card3 />
            </div>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import Card1 from './cards/card1'
import Card2 from './cards/card2'
import Card3 from './cards/card3'

export default {
  name: 'Cards',
  components: {
    Card1, Card2, Card3
  }
}
</script>

<style scoped>

</style>
