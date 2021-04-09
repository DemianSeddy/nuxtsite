<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div>Консультации</div>
      <p class="display-1 text--primary">
         Для пользователя
      </p>
      <p>в режиме предприятия</p>
      <div class="text--primary">
        Бухгалтерия предприятия, Зарплата и Управление Персоналом <br>
        Розница, Управление торговлей, Управление нашей фирмой
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
            Присылаете развернутое письмо по вашей проблеме,
            перезваниваете мне, озвучивая проблему
          <p>
          <h1>звонить можно после регистрации на сайте</h1>
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

