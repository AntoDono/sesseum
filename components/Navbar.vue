<template>
    <div class="w-full absolute top-0 left-0 z-40 p-2 flex items-center bg-primaryDark justify-between" >
        <h1 class="
            text-white text-6xl font-redressed 
            text-transparent bg-clip-text 
            text-secondaryYellow
        ">Susseum</h1>
        <ul class="list-none">
            <a href="/demo" class="text-primaryYellow text-1xl p-1 inline font-redressed transition duration-150 border-b-2 border-transparent hover:border-primaryYellow">Demo</a>
            <a href="." class="text-primaryYellow text-1xl p-1 inline font-redressed transition duration-150 border-b-2 border-transparent hover:border-primaryYellow">About</a>
            <a href="." class="text-primaryYellow text-1xl p-1 inline font-redressed transition duration-150 border-b-2 border-transparent hover:border-primaryYellow">Solutions</a>
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
