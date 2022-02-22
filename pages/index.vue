<template>
  <div>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Redressed&display=swap" rel="stylesheet">
    <client-only>
      <CursorTrail/>
    </client-only>
    <Navbar/>
    <Main/>
    <div>
      <Section :title="'The Most Unique Museum'" :center="true" :reverse="true"/>
      <Section :title="'Learn the Sus Culture'" :reverse="true"/>
      <Section :title="'Our Mission'"/>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Main from "../components/Main.vue"
import Section from "../components/Section.vue"
import CursorTrail from "../components/CursorTrail.vue"

export default {
  name: 'IndexPage',
  components: {
    Navbar,
    Main,
    Section,
    CursorTrail
  }
}
</script>

<style>

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #F75151; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #8F282B; 
}

</style>
