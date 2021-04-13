<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <template>
        <v-carousel
          cycle
          height="200"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
          >
            <v-sheet
              :color="colors[i]"
              height="100%"
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <div class="display-3">
                  {{ slide }}
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
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
        <Footer />
      </template>
    </v-main>
  </v-app>
</template>

<script>

import Card1 from '~/components/cards/card1'
import Card2 from '~/components/cards/card2'
import Card3 from '~/components/cards/card3'

import Footer from '~/pages/footer'

export default {
  components: { Card3, Card2, Footer, Card1 },
  data () {
    return {
      title: 'Придворов Алексей Павлович',
      colors: ['indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
        'green darken-2'],
      slides: ['Установка и сопровождение 1С',
        'БД MSSQL,postgreSQL, сервер apache',
        'Кластер серверов 1С',
        'платформы 7.7 8.1 8.2 8.3',
        'Отчеты, обмены, расширения конфигураций ',
        'Изменения только по техническим заданиям ']
    }
  }
}

</script>
