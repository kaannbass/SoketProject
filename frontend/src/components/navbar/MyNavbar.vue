<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Soket-IO Project</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav ">
          <li class="nav-item" v-for="nav in navbar" :key="nav.id">
            <a class="nav-link" aria-current="page" href="#">{{ nav.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script lang = "ts">
export default {
  name: "MyNavbar",
  data: () => ({
    navbar: [
      { id: 1, to: "", title: "Home" },
      { id: 2, to: "", title: "About Us" },
    ],
  }),
};
</script>


<style lang="scss">
</style>

