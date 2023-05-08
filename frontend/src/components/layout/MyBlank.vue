<script lang="ts">
import MyNavbar from "@/components/navbar/MyNavbar.vue";
export default {
  name: "MyBlank",
  components: {
    MyNavbar,
  },
};
</script>

<template>
  <div>
    <MyNavbar />
    <h1>Blank</h1>
    <!-- <h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe
      possimus amet, quaerat molestiae quas dignissimos voluptatum corrupti
      beatae. Repellat officiis sunt necessitatibus qui dolores facere eaque
      excepturi nesciunt quibusdam.
    </h1>
    <h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe
      possimus amet, quaerat molestiae quas dignissimos voluptatum corrupti
      beatae. Repellat officiis sunt necessitatibus qui dolores facere eaque
      excepturi nesciunt quibusdam.
    </h2>
    <h3>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe
      possimus amet, quaerat molestiae quas dignissimos voluptatum corrupti
      beatae. Repellat officiis sunt necessitatibus qui dolores facere eaque
      excepturi nesciunt quibusdam.
    </h3>
    <h4>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe
      possimus amet, quaerat molestiae quas dignissimos voluptatum corrupti
      beatae. Repellat officiis sunt necessitatibus qui dolores facere eaque
      excepturi nesciunt quibusdam.
    </h4>
    <h5>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe
      possimus amet, quaerat molestiae quas dignissimos voluptatum corrupti
      beatae. Repellat officiis sunt necessitatibus qui dolores facere eaque
      excepturi nesciunt quibusdam.
    </h5>
    <h6>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe
      possimus amet, quaerat molestiae quas dignissimos voluptatum corrupti
      beatae. Repellat officiis sunt necessitatibus qui dolores facere eaque
      excepturi nesciunt quibusdam.
    </h6> -->

    <slot></slot>
  </div>
</template>
  

<style lang="scss">
@import "@/assets/scss/style.scss";
h1 {
  background-color: $color1;
}
h2 {
  background-color: $color2;
}
h3 {
  background-color: $color3;
}
h4 {
  background-color: $color4;
}
h5 {
  background-color: $color5;
}
h6 {
  background-color: $color6;
}
</style>