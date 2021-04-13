<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Найдете меня в социальных сетях</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }} <link href="https://vk.com/id16353126" rel="stylesheet">
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>


<script>
export default {
  data: () => ({
    icons: [
      'mdi-vk',
      'mdi-mail',
      'mdi-linkedin',
      'mdi-instagram',
    ],
    linksInLink: [
      'https://vk.com/id16353126',
      'mdi-mail',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}
</script>


