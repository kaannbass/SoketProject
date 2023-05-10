<template>
  <div class="home">
    Home APIdata:
    <h1>{{ this.APIdata }}</h1>
    Value:
   
    <div class="" v-for="a in this.a" :key="a.id">
      <h1>{{ a }}</h1>
    </div>
    <div class="" v-for="a in this.value" :key="a.id">
      <h1>{{ a }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  data: () => ({
    APIdata: [],
    value: [],
    aa:[]
  }),
  methods: {
    getData() {
      axios.get("http://localhost:3000").then((res) => {
        console.log(res);
        this.APIdata = res.data.data;
        for (let i = 0; i < res.data.data.length; i++) {
          this.value.push(res.data.data[i].name);
          this.aa.JSON.parse(res.data.data[i].name)
          console.log(this.value);
          console.log("PARSE",this.aa);
        }
      });
    },
  },
  mounted() {
    this.getData();
  },
})
export default class HomeView extends Vue {}
</script>
