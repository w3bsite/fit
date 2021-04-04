<template>
  <div>
    <v-col
      v-for="(game, i) in games.data"
      cols="12"
      sm="6"
      md="4"
      lg="4"
      :key="i"
      :class="{ 'd-none': game.num1 < value[0] || game.num1 > value[1] }"
    >
      <v-card elevation="">
        <div>
          <v-card
            :color="theme ? 'deep-purple accent-4' : 'red  accent-4'"
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
              <div class="text-h6" style="font-size: 18px !important">
                {{
                  game.title.length > "29"
                    ? game.title.substring(0, 29) + ".."
                    : game.title
                }}
              </div>
            </v-card-title>
          </v-card>
          <v-card :elevation="0" class="text-body-1 darken-4 desc">
            <v-card-text
              class="text-body-1"
              :class="{
                'white--text': theme,
                'grey--text text--darken-4': !theme
              }"
              style="font-size: 14px !important"
            >
              {{ game.description.substring(0, 420) + "..." }}
            </v-card-text>
            <v-card-actions>
              <v-btn
                large
                :to="{
                  name: 'single',
                  params: { id: game.id, single: game }
                }"
                dark
                :color="theme ? 'red  accent-4' : 'deep-purple accent-4'"
                class="text-body-1 font-weight-normal"
              >
                بیشتر <br />
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-card>
    </v-col>
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
    cratio: { default: 5 / 7, type: Number },
    sort: { default: "updated_at", type: String },
    filter: { default: "2010", type: String },
    genre: { default: " ", type: String },
    games: { type: Object },
    value: { type: Array }
  }
};
</script>

<style></style>
