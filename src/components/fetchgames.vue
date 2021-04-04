<template>
  <v-container fluid>
    <v-row>
      <v-container fluid>
        <div class="text-center">
          <v-pagination
            :color="theme ? 'indigo accent-4 ' : 'indigo accent-4 '"
            v-model="page"
            :length="itotalpages"
            class="my-2"
          ></v-pagination>
        </div>
        <v-row>
          <v-col cols="12" sm="2">
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <v-card>
                    <v-card-text>
                      <v-range-slider
                        vertical
                        @input="page = 1"
                        v-model="value"
                        :tick-labels="label"
                        :max="2023"
                        :min="2014"
                        class="large-slider"
                      ></v-range-slider>
                    </v-card-text>
                  </v-card>

                  <v-select
                    @input="page = 1"
                    v-model="genre"
                    :items="items"
                    label="Genre"
                  ></v-select>

                  <!-- <v-banner color="purple" dark>{{ genre }}</v-banner> -->
                </v-col>
              </v-row>
            </v-container>
          </v-col>
          <v-col cols="12" sm="10">
            <v-container v-if="finalgames" fluid>
              <v-container fluid>
                <v-row>
                  <v-col
                    v-for="(game, i) in finalgames"
                    cols="12"
                    sm="6"
                    md="4"
                    lg="4"
                    :key="i"
                    :class="{
                      red: game.num1 < value[0] || game.num1 > value[1],
                    }"
                  >
                    <v-card style="direction: rtl">
                      <div>
                        <v-card
                          :color="
                            theme ? 'deep-purple accent-4' : 'red  accent-4'
                          "
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
                              :src="`/img/1/` + game.title + `.jpg`"
                              :lazy-src="`/img/1/` + game.title + `.jpg`"
                              alt="0"
                            />
                          </div>
                          <v-card-title>
                            <div
                              class="text-h6"
                              style="font-size: 18px !important"
                            >
                              {{
                                game.title.length > "29"
                                  ? game.title.substring(0, 29) + ".."
                                  : game.title
                              }}
                            </div>
                          </v-card-title>
                        </v-card>
                        <v-card
                          :elevation="0"
                          class="text-body-1 darken-4 desc"
                        >
                          <v-card-text
                            class="text-body-1 text-right"
                            :class="{
                              'white--text': theme,
                              'grey--text text--darken-4': !theme,
                            }"
                            style="font-size: 14px !important"
                          >
                            {{ game.description.substring(0, 410) + "..." }}
                          </v-card-text>
                          <v-card-actions style="direction: ltr">
                            <v-btn
                              large
                              :to="{
                                name: 'single',
                                params: { id: game.id, single: game },
                              }"
                              dark
                              :color="
                                theme ? 'red  accent-4' : 'deep-purple accent-4'
                              "
                              class="text-body-1 font-weight-normal"
                            >
                              بیشتر
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>

              <!-- <div class="text-center">
        <v-pagination
          :color="theme ? 'indigo accent-4 ' : 'indigo accent-4 '"
          v-model="page"
          :length="itotalpages"
          class="mt-6"
        ></v-pagination>
      </div> -->
            </v-container>
            <v-sheet class="d-flex flex-column" width="" height="600" v-else>
              <v-progress-circular
                class="ma-auto"
                size="100"
                :width="3"
                indeterminate
              ></v-progress-circular>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    ccols: { default: 12, type: Number },
    csm: { default: 6, type: Number },
    cmd: { default: 4, type: Number },
    clg: { default: 4, type: Number },
    cwidth: { default: 255, type: Number },
    cratio: { default: 5 / 7, type: Number },
  },
  components: {},

  data() {
    return {
      value: [2014, 2023],
      label: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
      genre: " ",
      yeara: 2019,
      yearb: 2021,
      sort: "created_at",
      assend: "desc",
      er: null,
      items: ["اکشن", "اول شخص", "شوتر", "ورزشی", "RPG", " "],
      page: 1,
      limit: 6,
    };
  },
  chimera: {
    games() {
      return {
        prefetch: true,
        url: this.$url,
        headers: {
          Authorization: ` ${this.auth}`,
        },
        params: {
          // caption_contains: this.genre,
          _sort: this.sort + `:` + this.assend,
          // _start: (this.page - 1) * this.limit,
          // _limit: this.limit,
        },
      };
    },
  },
  methods: {},
  computed: {
    auth() {
      return this.$cookies.get("jwt")
        ? `Bearer ${this.$cookies.get("jwt")}`
        : "";
    },
    ipage() {
      return (this.page - 1) * this.limit;
    },
    ilimit() {
      return this.ipage + this.limit;
    },
    itotal() {
      if (this.$chimera.games.data) {
        return this.filteredgames.length;
      } else {
        return null;
      }
    },
    finalgames() {
      if (this.$chimera.games.data) {
        return this.filteredgames.slice(this.ipage, this.ilimit);
      } else {
        return null;
      }
    },
    itotalpages() {
      return this.itotal ? Math.ceil(this.itotal / this.limit) : null;
    },
    filteredgames() {
      if (this.$chimera.games.data) {
        return this.games.data.filter(
          (e) =>
            e.caption.includes(this.genre) &&
            (e.num1 > this.value[0] || e.num1 == this.value[0]) &&
            (e.num1 < this.value[1] || e.num1 == this.value[1])
        );
      } else {
        return null;
      }
    },
    theme() {
      return this.$vuetify.theme.dark ? true : false;
    },
  },
};
</script>

<style>
.v-slider {
  height: 500px;
}
</style>
