<template>
  <v-app dark>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import Info from '~/components/Info'
import Footer from '~/components/Footer'
import ProgressLoad from '~/components/ProgressLoad'
import Title from '~/components/Title'
import SlideAll from '~/components/SlideAll'
import Cards from '~/components/Cards'

export default {
  components: {
    Info,
    Footer,
    Title,
    SlideAll,
    Cards,
    ProgressLoad
  },

  data () {
    return {
      title: 'Придворов Алексей Павлович'
    }
  }

}
</script>
