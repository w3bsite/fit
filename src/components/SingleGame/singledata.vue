<template>
  <v-container fluid>
    <v-row class="">
      <v-col style="">
        <div>
          <v-card v-if="game" class="pa-2 ma-0">
            <v-card-title>{{ game.title }}</v-card-title>
            <v-divider inset></v-divider>
            <singletags :game="game" />
            <v-divider inset></v-divider>

            <div class="d-flex flex-column my-5">
              <div class="d-flex">
                <v-img
                  width="255"
                  :aspect-ratio="5 / 7"
                  :src="`../img/1/` + game.title + `.jpg`"
                >
                </v-img>
                <v-container class="my-auto">{{
                  game.description
                }}</v-container>
              </div>
              <v-img
                max-width="420"
                :src="`../img/1/` + game.title + `.gif`"
                class="mx-auto"
              >
              </v-img>
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <v-sheet> </v-sheet>
  </v-container>
</template>

<script>
import singletags from "./singletags.vue";
export default {
  components: { singletags },
  props: { game: { type: Object } }
};
</script>

<style></style>
