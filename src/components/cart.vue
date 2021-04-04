<template>
  <v-container>
    <v-card>
      <v-card-title primary-title> Cart title </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-list>
          <v-list-item> list item </v-list-item>
          <v-list-item-title>list item title</v-list-item-title>
          <v-list-item-content>{{ item }}</v-list-item-content>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <protest @sel="x($event)"></protest>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import protest from "./protest.vue";
export default {
  components: { protest },
  data() {
    return {
      item: [1],
      product: 2,
    };
  },
  methods: {
    x(e) {
      console.log(e);
    },
  },
};
</script>

<style>
</style>