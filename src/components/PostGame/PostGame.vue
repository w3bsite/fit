<template>
  <!-- pagination -->
  <div>
    <v-container fluid>
      <v-card class="pa-4">
        <v-chip size="16px">
          <v-icon color="red" class="text-white">mdi-post</v-icon>
          {{ this.url }}
        </v-chip>
      </v-card>
    </v-container>

    <!-- FORM -->
    <v-container class="my-0">
      <v-card color=" " ref="form" @submit="sub" class="row mx-3 pa-md-16 pa-2">
        <v-container fluid>
          <v-row>
            <!-- TITLE && URL -->
            <v-col cols="12" sm="6" md="6">
              <v-row>
                <!-- TITLE -->
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    v-model="x.title"
                    placeholder="Enter Your Title"
                    label="Title"
                    outlined
                    class="ma-0"
                  />
                  <v-text-field
                    v-model="x.title"
                    placeholder="Enter Your Caption"
                    label="Genre"
                    outlined
                    class="ma-0"
                  />
                  <v-text-field
                    v-model="x.title"
                    placeholder="Enter Your TXT1"
                    label="Developers"
                    outlined
                    class="ma-0"
                  />
                </v-col>

                <!-- URL SELECT -->
                <!-- <v-col cols="12" sm="4" md="12">
                  <v-select v-model="url" :items="urlSel" filled
                /></v-col> -->
              </v-row>
            </v-col>
            <!-- TITLE && URL -->
            <v-col cols="12" sm="6" md="6">
              <v-row>
                <!-- TITLE -->
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    v-model="x.title"
                    placeholder="Enter Your Num1"
                    label="Year"
                    outlined
                    class="ma-0"
                  />
                  <v-text-field
                    v-model="x.title"
                    placeholder="Number"
                    label="Size"
                    outlined
                    class="ma-0"
                  />
                  <v-text-field
                    v-model="x.title"
                    placeholder="Enter Your Publisher"
                    label="Enter Your Publisher"
                    outlined
                    class="ma-0"
                  />
                </v-col>

                <!-- URL SELECT -->
                <!-- <v-col cols="12" sm="4" md="12">
                  <v-select v-model="url" :items="urlSel" filled
                /></v-col> -->
              </v-row>
            </v-col>

            <!-- IMAGE -->
            <!-- 
              
                <v-col>
                <v-text-field
            v-model="x.caption"
            class="mx-md col-md-3 col-sm-8 col-xs-11"
            label="Enter Your Image URL"
            outlined
          />
                </v-col>
           -->

            <!-- CONTENT -->
            <v-col cols="12" sm="10" md="12">
              <v-row>
                <v-col>
                  <v-textarea
                    v-model="x.content"
                    auto-grow
                    label="Enter Your content"
                    outlined
                    type="textarea"
                    rows="4"
                    row-height="60"
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-btn
              class="col-sm-3 col-md-3 col-10"
              color="primary"
              type="submit"
              >send
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn fab @click="preview = !preview">
              <v-icon>
                {{ preview ? "mdi-chevron-up" : "mdi-chevron-down" }}
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-container>

    <v-expand-transition>
      <v-container class="my-0" v-show="preview">
        <v-card class="mx-3" color="accent">
          <div class="text-h6 text-sm-h5 px-6 py-3">
            {{ x.title }}
          </div>
          <v-divider></v-divider>
          <div class="text-body1 px-8 py-4">
            {{ x.content }}
          </div>
        </v-card>
      </v-container>
    </v-expand-transition>
    <!-- preview -->
    <!-- <v-container fluid>
      <v-row>
        <v-card class="col pa-md-1 ma-md-4">
          <v-card>
            <span class="body-1 text-weight-bolder"> {{ x.title }}</span>
          </v-card>
          <v-divider></v-divider>
          <v-card>
            <span class="body-2"> {{ x.content }}</span>
          </v-card>
          <v-card>
            <img :src="x.caption" class="col" alt="" /><br />
            {{ x.caption }}
          </v-card>
        </v-card>
      </v-row>
    </v-container> -->
  </div>
</template>
<script>
export default {
  props: ["coo", "urlSel"],
  data() {
    return {
      url: "/articles",
      preview: false,
      x: {}
    };
  },
  computed: {},
  mounted() {
    if (this.$vuetify.breakpoint.mobile) {
      this.preview = true;
    } else {
      this.preview = false;
    }
  },
  methods: {
    sub: function() {
      this.$axios
        .post(this.url, this.x, {
          headers: {
            Authorization: "Bearer" + " " + this.coo.jwt
          }
        })
        .then(r => {
          this.res = r;
          console.log(r.data);
        });
    }
  }
};
</script>
