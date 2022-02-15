<template>
    <div class="flex items-center bg-black justify-between">
        <h1 class="text-white text-5xl">Susseum</h1>
        <ul class="list-none">
            <a href="." class="p-1 inline text-white">Demo</a>
            <a href="." class="p-1 inline text-white">About</a>
            <a href="." class="p-1 inline text-white">Solutions</a>
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
