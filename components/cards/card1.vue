<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div>Установка</div>
      <p class="display-1 text--primary">
          1C на ОС windows, nix
      </p>
      <p>Обновление</p>
      <div class="text--primary">
        Платформы с 7.7 до 8.3<br>
        Конфигураций 1С и партнеров
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="teal accent-4"
        @click="reveal = true"
      >
        Подробней
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="display-1 text--primary">
             Как взаимодействуем
          </p>
            Покупаете 1С через меня <H1>Cтавлю бесплатно</H1>
          <p>
            Покупаете 1С сами <H1>платите</H1>
            Обновление по абонименту на год
          </p>


        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="teal accent-4"
            @click="reveal = false"
          >
            Вернутся
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    reveal: false,
  }),
}
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>

