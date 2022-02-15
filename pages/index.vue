<template>
  <div class="overflow-x-hidden">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Redressed&display=swap" rel="stylesheet">
    <Navbar/>
    <Main/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Main from "../components/Main.vue"

export default {
  name: 'IndexPage',
  components: {
    Navbar,
    Main
  }
}
</script>

