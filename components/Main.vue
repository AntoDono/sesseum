<template>
    <div class="bg-gradient-to-bl from-torange to-tdred h-screen">
        <div class="relative top-72 left">
            <h2 class="text-4xl font-redressed text-white">Susseum, where Sus is a lifestyle.</h2>
            <GradientButton :text="'View Demo'"/>
        </div>
    </div>
</template>

<script>
import GradientButton from '../components/GradientButton.vue'

export default {
    name: "Main",
    components: {
        GradientButton
    }
}
</script>

<style scoped>

.left{
    left: 10%
}

</style>