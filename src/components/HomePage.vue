<template>
  <div>
    <v-container class="" v-if="apig.data" fluid>
      <topslider :games="apig.data"></topslider>
    </v-container>

    <v-container fluid>
      <v-sheet outlined>
        <v-row align="center">
          <v-col class="mx-auto" cols="12" sm="12">
            <fetchgames></fetchgames> </v-col
        ></v-row>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import fetchgames from "../components/fetchgames.vue";
import topslider from "./HomePage/topslider.vue";
export default {
  data() {
    return { items: ["اکشن", "اول شخص", "شوتر", "ورزشی", "RPG"], genre: "ا" };
  },
  components: { topslider, fetchgames },
  computed: {
    auth() {
      return this.$cookies.get("jwt")
        ? `Bearer ${this.$cookies.get("jwt")}`
        : "";
    },
  },
  chimera: {
    apig() {
      return {
        url: this.$url,
        headers: {
          Authorization: ` ${this.auth}`,
        },
      };
    },
  },
};
</script>

<style></style>
