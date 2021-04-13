<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        v-for="item in links"
        :key="item.title"
        plain
        :to="item.url"
      >
        {{ item.title }}
      </v-btn>
      <v-btn v-if="IsLoggedIn" plain @click="onLogout">
        Выйти
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <Info />
    <Footer/>
  </v-app>
</template>

<script>

import Info from '~/components/Info'
import Footer from '~/components/Footer/Footer'

export default {
  components: {
    Info,
    Footer,
  },

  data () {
    return {
      title: 'Придворов Алексей Павлович'
    }
  },
  computed: {
    IsLoggedIn () {
      return false
    },
    links () {
      if (!this.IsLoggedIn) {
        return [
          {
            title: 'Главная',
            icon: 'mdi-home',
            url: '/'
          },
          {
            title: 'Войти',
            icon: 'mdi-home',
            url: '/login'
          }
        ]
      } else {
        return [
          {
            title: 'Главная',
            icon: 'mdi-home',
            url: '/'
          },
          {
            title: 'Профиль',
            icon: 'mdi-home',
            url: '/profile'
          }
        ]
      }
    }
  },
  methods: {
    onLogout () {
      this.$router.push('/')
    }
  }

}
</script>
