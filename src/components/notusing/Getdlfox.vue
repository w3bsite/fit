<template>
  <v-container fluid class="pa-2 pa-md-6">
    <div class="text-center mb-10">
      <v-pagination
        v-model="page"
        @input="gett"
        :length="4"
        circle
      ></v-pagination>
    </div>

    <v-row>
      <v-col
        class="m cols-12 col-12 col-xs-12 col-sm-3 col-md-4 col-lg-4 col-xl-4 ma-0 pa-1 pa-sm-2 pa-md-5 d-flex justify-center"
        v-for="(item, index) in Games"
        :key="index"
      >
        <div>
          <v-hover v-slot="{ hover }">
            <v-card :elevation="hover ? 8 : 4" class="col-md-12 pa-5 m" contain>
              <!-- <v-card-title>
                {{ item.name }}
              </v-card-title> -->
              <v-card-text v-html="item.content.rendered"> </v-card-text>
            </v-card>
          </v-hover>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      Games: [],
      rendered: [],
      er: "",
      domain:
        "https://sabz.herokuapp.com/https://www.dlfox.com/wp-json/wp/v2/posts?per_page=12&page=",
      page: 1
    };
  },
  computed: {
    URL() {
      return this.domain + this.page;
    }
  },
  filters: {
    substr: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.substring(0, 200);
    }
  },
  methods: {
    fetchGames: function() {
      this.$http()
        .then(r => (this.Games = r.data))

        .catch(e => (this.er = e));
    },
    gett: function() {
      fetch(this.domain + this.page)
        .then(r => (this.json = r.json()))
        .then(json => {
          for (const key in json) {
            if (Object.hasOwnProperty.call(json, key)) {
              const element = json[key];
              this.Games.push(element);
              this.Games.forEach(el => {
                el.name = element.title.rendered;
                el.short = element.excerpt;
                el.desc = element.content.rendered;
                el.sbst = element.content.rendered.substring(0, 40);
              });
            }
          }
        });
    }
  },
  created() {
    this.gett();
  },
  mounted() {}
};
</script>

<style>
div > p:last-child {
  display: none;
}
.price {
  color: red;
}
.m {
  min-height: 750px;
  text-align: right;
  direction: rtl;
  margin: 0px;
}
.m:hover {
}
.m img {
  padding: 0px;
  left: 0px;
  right: 00px;
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: 0px 0px;
  z-index: 99999999999999999999;
}
.ind {
  position: fixed;
  width: 40%;

  object-fit: contain;
  margin: auto;
}
img[src$="money.jpg"] {
  display: none !important;
  width: 0px;
  height: 0px;
  margin: 10px !important;
}

img[src$="money.jpg"]<p {
  color: red;
}

.mar {
  padding: 10px;
  margin-bottom: 10px;
}
</style>
