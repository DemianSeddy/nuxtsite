<template>
  <div class="text-center">
    <v-progress-circular
      :rotate="360"
      :size="100"
      :width="15"
      :value="value"
      color="teal"
    >
      {{ value }}
    </v-progress-circular>
  </div>
</template>

<script>

export default {
  name: 'ProgressLoad',
  computed :{
    loading(){
      return this.$store.getters.getLoading
    }
  }
}

</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
