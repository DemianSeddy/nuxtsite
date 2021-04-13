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
</template>

<script>
export default {
  // eslint-disable-next-line vue/no-unused-components

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
