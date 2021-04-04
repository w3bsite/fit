<template>
  <v-card color="deep-purple accent-4" elevation="5">
    <v-carousel
      :cycle="cycle"
      interval="4000"
      vertical-delimiters
      vertical
      progress
      progress-color="red accent-4"
      height="auto"
    >
      <v-carousel-item v-for="i in 5" :key="i">
        <div>
          <v-container fluid>
            <v-row>
              <v-img
                @click="cycle = !cycle"
                eager
                :src="`/img/1/1big/` + games[i - 1].title + `.jpg`"
                class="col-md-6"
              />
              <div class="col-md-6 my-auto">
                <p style="direction: rtl" class="body-1">
                  {{ games[i - 1].description.substring(0, 800) + "..." }}
                </p>

                <v-btn
                  color="red  accent-4"
                  class="col-3 float-right text-body-1 font-weight-normal"
                >
                  ادامه
                </v-btn>
              </div>
            </v-row>
          </v-container>
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
export default {
  props: { games: { type: Array } },
  data() {
    return { cycle: false };
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? true : false;
    }
  }
};
</script>

<style></style>
