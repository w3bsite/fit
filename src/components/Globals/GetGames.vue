<template>
  <div>
    <v-container>
      <!-- <v-btn @click="games.reload()" class="my-8" block>reload</v-btn> -->
      <div class="text-center">
        <v-pagination
          :color="theme ? 'deep-purple accent-4 ' : 'orange accent-4'"
          v-model="page"
          :length="3"
          class="mt-6 mb-6"
        ></v-pagination>
      </div>
      <v-sheet class="d-flex flex-column" height="500" v-if="games.loading">
        <v-progress-circular
          class="ma-auto"
          size="100"
          :width="3"
          indeterminate
        ></v-progress-circular>
      </v-sheet>
      <v-row v-else-if="games.data">
        <v-col
          :cols="ccols"
          :sm="csm"
          :md="cmd"
          :lg="clg"
          class="d-flex flex-column"
          v-for="(g, i) in games.data"
          :key="i"
        >
          <v-card :elevation="3">
            <div>
              <v-card
                :color="theme ? 'orange accent-4 ' : 'deep-purple accent-4'"
                :elevation="0"
                class="rounded-0"
                dark
              >
                <div class="white">
                  <v-img
                    :eager="false"
                    class="mx-auto"
                    :width="cwidth"
                    :aspect-ratio="cratio"
                    :src="`/img/1/` + g.title + `.jpg`"
                    :lazy-src="`/img/1/` + g.title + `.jpg`"
                    alt="0"
                  />
                </div>
                <v-card-title>
                  <div class="text-h6" style="font-size: 18px !important">
                    {{
                      g.title.length > "29"
                        ? g.title.substring(0, 29) + ".."
                        : g.title
                    }}
                  </div>
                </v-card-title>
              </v-card>
              <v-card :elevation="0" class="text-body-1 darken-4 desc">
                <v-card-text
                  class="text-body-1"
                  style="font-size: 14px !important"
                >
                  {{ g.description.substring(0, 420) + "..." }}
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    large
                    :to="{
                      name: 'single',
                      params: { id: g.id, single: g }
                    }"
                    :color="theme ? 'pink accent-4' : 'red accent-4'"
                    depressed
                    dark
                    class="text-body-1"
                  >
                    بیشتر <br />
                  </v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-pagination
          :color="theme ? 'deep-purple accent-4 ' : 'orange accent-4'"
          v-model="page"
          :length="3"
          class="mt-6"
        ></v-pagination>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  props: {
    ccols: { default: 12, type: Number },
    csm: { default: 6, type: Number },
    cmd: { default: 4, type: Number },
    clg: { default: 4, type: Number },
    cwidth: { default: 255, type: Number },
    cratio: { default: 5 / 7, type: Number }
  },
  beforeCreate() {
    console.log(this.$url);
  },
  mounted() {
    // this.$vuetify.rtl = true;
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? true : false;
    }
  },
  chimera: {
    games() {
      return (
        this.$url +
        "?_start=" +
        (this.page - 1) * this.limit +
        "&_limit=" +
        this.limit
      );
    }
  },
  data() {
    return {
      page: 1,
      limit: 6
    };
  }
};
</script>
<style>
.desc {
  direction: rtl;
}
</style>
