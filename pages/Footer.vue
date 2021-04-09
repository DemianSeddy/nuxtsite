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
          v-for="icon,InLink in icons,linksInLink"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <router-link to="InLink">
            <v-icon size="24px">
              {{icon}}
            </v-icon>
          </router-link>



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


