<template>
  <div>
    <v-container fluid>
      <v-row>
        <div v-for="(r, i) in related.data" :key="i">
          <div :class="{ 'red d-none': hide == r.id, 'col-12': hide != r.id }">
            <v-sheet elevation="5" class="d-flex flex-column mx-auto">
              <v-sheet>
                <v-img :src="`/img/1/` + r.title + `.jpg`"></v-img>
              </v-sheet>

              <span ref="re">{{ r.title }}</span>
              <br />
            </v-sheet>
          </div>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["Genre", "id"],
  name: "relatedgenre",
  data() {
    return {
      t1: null,
      t2: null,
      srch: null,
      hide: this.id
    };
  },
  created() {
    this.filter();
  },
  chimera: {
    related() {
      return { url: this.ur };
    }
  },
  computed: {
    ur() {
      return this.$url + "?" + this.qss;
    },
    qss() {
      let params = {
        _where: {
          _or: [
            [{ caption_contains: (this.t1, this.t2) }],
            [{ caption_contains: (this.t2, this.t3) }],
            [{ caption_contains: (this.t3, this.t4) }]
          ]
        }
      };
      return this.$qs.stringify(params);
    }
  },

  methods: {
    filter: function() {
      let x = this.Genre;
      let query = x.split("،")[0];
      let query1 = x.split("،")[1];
      let query2 = x.split("،")[2];
      let query3 = x.split("،")[3];
      this.t1 = query;
      this.t2 = query1;
      this.t3 = query2;
      this.t4 = query3;
    }
  }
};
</script>

<style>
.hid {
  width: 0px !important;
}
</style>
