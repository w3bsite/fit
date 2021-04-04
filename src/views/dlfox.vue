<template>
  <div>
    <v-container grid-list>
      <v-row v-for="(g, i) in games" :key="i">
        <v-card class="col">
          <v-banner class="purple">
            {{ g.title.rendered }}
            <br />
          </v-banner>
          <br />
          <v-btn block></v-btn>
          <h1 @click="reg(g.content.rendered)">
            {{ g.content.rendered }}
            <br />
          </h1>
          <v-banner v-html="g.content.rendered">
            <br />
          </v-banner>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  components: {},
  created() {
    this.gt();
  },
  mounted() {
    this.$nextTick(() => {});
  },
  filters: {
    filt(value) {
      let rg = /([٫۰۱۲۳۴۵۶۷۸۹]*) مگابایت|([٫۰۱۲۳۴۵۶۷۸۹]*) گیگابایت/giu;
      let x = rg.exec(value);
      let tip = x[2] ? ` x[2]` : x[1] ? ` x[1]` : "I Dont Know";
      return tip;
    }
  },
  methods: {
    reg: function(g) {
      if (typeof g === "string" && g !== null) {
        let rg = /([٫۰۱۲۳۴۵۶۷۸۹]*) مگابایت|([٫۰۱۲۳۴۵۶۷۸۹]*) گیگابایت/giu;
        let x = rg.exec(g);
        console.log(x[0]);
        console.log(x[1]);
        console.log(x[2]);
        let tip = x[2] ? "gig" : x[1] ? "meg" : "I Dont Know";
        console.log(tip);
        console.log(x[0]);
      } else {
        console.log(g);
      }
    },
    gt: function() {
      this.$axios
        .get(this.url)
        .then(r => {
          this.games = r.data;
          const obj = r.data;
          for (var i = 0; i < obj.length; i++) {
            var fname = obj[i].content.rendered;
            console.log(fname);
            // do something with fname
          }
        })
        .then(e => (this.er = e));
    },
    funfilt(g) {
      let rg = /([٫۰۱۲۳۴۵۶۷۸۹]*) مگابایت|([٫۰۱۲۳۴۵۶۷۸۹]*) گیگابایت/giu;

      let x = rg.exec(g);

      let tip = x[2] ? x[2] : x[1] ? x[1] : "I Dont Know";
      console.log(tip);
    }
  },
  data() {
    return {
      games: {},
      er: null,
      jeg: [],
      url: "/https://www.dlfox.com/wp-json/wp/v2/posts",
      data: [],
      page: "",
      secret: "",
      id: ""
    };
  }
};
</script>

<style></style>
