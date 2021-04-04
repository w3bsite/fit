<template>
  <v-container class="blue">
    <v-btn>first</v-btn>
    <v-btn>secound</v-btn>
    <v-btn>third</v-btn>
    <v-divider></v-divider>
    <v-btn @click="$emit('sel', $event.target.textContent)">{{ fir }}</v-btn>
    <v-btn>{{ sec }}</v-btn>
    <v-btn>{{ thir }}</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      fir: 5,
      sec: 2,
      thir: 3,
    };
  },
};
</script>

<style>
</style>