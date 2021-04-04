<template>
  <v-expand-transition>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6">
          <!-- col-right -->
          <v-sheet>
            <v-chip outlined color="green" class="text-body-2">
              <v-icon right>mdi-shape</v-icon>
              <div>سبک</div>
            </v-chip>

            <v-chip>
              <div>{{ game.caption }}</div>
            </v-chip>
          </v-sheet>
          <v-card-actions>
            <v-chip outlined color="deep-orange" class="text-body-2">
              <v-icon right>mdi-robot</v-icon>
              <span> سازندگان </span>
            </v-chip>

            <v-chip>
              <span class="text-body-2"> {{ game.txt1 }}</span>
            </v-chip>
          </v-card-actions>
          <v-card-actions>
            <v-chip outlined color="deep-orange" class="text-body-2">
              <v-icon right>mdi-robot</v-icon>
              <span> منتشرکننده </span>
            </v-chip>

            <v-chip>
              <span class="text-body-2"> {{ game.txt2 }}</span>
            </v-chip>
          </v-card-actions>
        </v-col>
        <!-- col left -->
        <v-col cols="12" sm="6">
          <v-card-actions>
            <v-chip outlined color="green" class="text-body-2">
              <v-icon right>mdi-shape</v-icon>
              <span> سال تولید </span>
            </v-chip>

            <v-chip color="">
              <span class="text-body-2"> {{ game.num1 }}</span>
            </v-chip>
          </v-card-actions>
          <v-card-actions>
            <v-chip outlined color="deep-orange" class="text-body-2">
              <v-icon right>mdi-harddisk-plus </v-icon>
              <span> حجم بازی </span>
            </v-chip>

            <v-chip>
              <span class="text-body-2"> {{ game.number }}GB</span>
            </v-chip>
          </v-card-actions>
          <v-card-actions>
            <v-chip outlined color="deep-orange" class="text-body-2">
              <v-icon right>mdi-currency-usd </v-icon>
              <span>قیمت بازی </span>
            </v-chip>

            <v-chip>
              <span class="text-body-2"> {{ (game.number / 4) * 6000 }} T</span>
            </v-chip>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </v-expand-transition>
</template>

<script>
export default {
  props: { game: { type: Object } },
  mounted() {
    console.log(this.game.number / 4);
  }
};
</script>

<style></style>
