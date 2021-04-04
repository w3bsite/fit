<template>
  <div>
    <div class="text-center mb-10">
      <v-toolbar color="grey">
        <h3>Web</h3>
        <v-card>{{ er }}</v-card>
      </v-toolbar>
    </div>
    <div class="v-container"></div>
    <v-row v-for="(g, i) in games" :key="i">
      <v-col class="col">
        <v-card>{{ g }}</v-card>
        <v-card v-html="g"> </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: {},
      er: null,
      reg: [],
      data: [],
      page: "games",
      secret: "vsnic0i0xumn78hi50ztw4147ebpgm",
      id: "abyevj5ess9i95jl9cjvwtln59xvmfabyevj5ess9i95jl9cjvwtln59xvmf"
    };
  },
  created() {
    console.log(this.$cor ? "axios works!" : "Uh oh..");
  },
  mounted() {
    this.get();
  },
  methods: {
    get: function() {}
  }
};
</script>

<style></style>
