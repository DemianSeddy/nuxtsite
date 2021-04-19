<template>
  <div class="text-center ma-2">
    <template v-if="Message">
      <v-snackbar
        :timeout="5000"
        :value="true"
        :color="snackbarColor"
        @input="closeMessage"
      >
        {{ Message }}

        <template #action="{ attrs }">
          <v-btn
            v-bind="attrs"
            color="blue"
            text
            @click="closeMesage = false"
          >
            Закрыть
          </v-btn>
        </template>
      </v-snackbar>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Info',
  computed: {

    message () {
      return this.$store.getters.getMessage
    },
    snackbarColor () {
      return this.getters.getError ? 'red' : 'gren'
    },
  },
  methods: {
    closeMesage() {
      this.$store.commit('clearMessage',{root:true})
    },
  }

}
</script>

<style scoped>

</style>
