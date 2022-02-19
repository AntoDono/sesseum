<template>
    <div class="w-screen absolute top-0 left-0 z-20 p-2 flex items-center bg-tdark justify-between" >
        <h1 class="
            text-white text-6xl font-redressed 
            text-transparent bg-clip-text bg-gradient-to-bl from-tred to-torange
        ">Susseum</h1>
        <ul class="list-none">
            <a href="/demo" class="text-torange text-1xl p-1 inline font-redressed transition duration-150 border-b-2 border-transparent hover:border-torange">Demo</a>
            <a href="." class="text-torange text-1xl p-1 inline font-redressed transition duration-150 border-b-2 border-transparent hover:border-torange">About</a>
            <a href="." class="text-torange text-1xl p-1 inline font-redressed transition duration-150 border-b-2 border-transparent hover:border-torange">Solutions</a>
        </ul>
    </div>
</template>

<script>
import GradientButton from '../components/GradientButton.vue'

export default {
    name: "Navbar",
    components: {
        GradientButton
    }
}
</script>
