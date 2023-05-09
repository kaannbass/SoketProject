<template>
  <div class="home">Home
    <h1>{{ this.APIdata }}</h1>
  </div>
 
</template>

<script lang="ts">
import axios from "axios";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  data:()=>({
    APIdata:[]
  }),
  methods: {
    getData() {
      axios.get("http://localhost:3000").then((res) => {
        console.log(res)
        this.APIdata = res.data 
        });
    },
  },
  mounted() {
    this.getData();
  },
})
export default class HomeView extends Vue {}
</script>
