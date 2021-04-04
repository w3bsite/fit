<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <v-range-slider
              v-model="value"
              :tick-labels="label"
              :max="2023"
              :min="2014"
            ></v-range-slider>
          </v-card-text>
        </v-card>
        <v-select v-model="genre" :items="items" label="label"></v-select>
        <v-banner color="purple" dark>{{ genre }}</v-banner>
      </v-col>
    </v-row>

    <v-container>
      <v-row>
        <v-col
          v-for="(game, i) in games.data"
          cols="4"
          :key="i"
          :class="{ 'd-none': game.num1 < value[0] || game.num1 > value[1] }"
        >
          <v-sheet>
            {{ game.id }}<br />
            {{ game.title }}<br />
            {{ game.num1 }} <br />
            {{ game.caption }}<br />
            {{ game.description.substring(0, 420) + "..." }}<br />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
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
      limit: "6"
    };
  },
  chimera: {
    games() {
      return {
        url: this.$url,
        params: {
          caption_contains: this.genre,
          _sort: this.sort + `:` + this.assend,
          _start: (this.page - 1) * this.limit,
          _limit: this.limit
        }
      };
    }
  }
};
</script>

<style></style>
