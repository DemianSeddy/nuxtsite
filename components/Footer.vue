<template>
  <v-footer
    dark
    padless
    max-height
    absolute
    inset
    app
    width="auto"
    class="py-12"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Найдете меня в социальных сетях или напишите письмо для регистрации</strong>
        <v-spacer />
        <v-btn
          v-for="icon in icons"
          :key="icon.key"
          :href="icon.link"
          class="mx-4"
          dark
          icon
        >
          <v-icon>
            {{ icon.key }}
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
    icons: [{ key: 'mdi-vk', link: 'https://vk.com/id16353126' },
      { key: 'mdi-mail', link: 'mailto:pridvorov@gmail.com' }

    ]
  })
}
</script>
