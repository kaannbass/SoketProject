<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheDefaultLayout",
});
</script>

<template>
  <div >
    <h1>TheDefaultLayout</h1>
   <slot></slot>
  </div>
</template>
