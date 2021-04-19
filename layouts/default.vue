<template>
  <v-app dark>
    <v-main>
      <Title />
      <v-container>
        <nuxt />
      </v-container>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>

export default {

  data () {
    return {
      title: 'Придворов Алексей Павлович'
    }
  }

}
</script>
