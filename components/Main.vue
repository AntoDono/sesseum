<template>
    <div>
        <div class="z-10 relative top-0 right-14 slant skew-x-6 bg-gradient-to-bl from-torange to-tdred h-screen w-7/12">

        </div>
        <div class="z-10 absolute top-0 left-0 h-screen w-6/12">
            <div class="relative top-80 left">
                <h2 class="w-10/12 text-4xl font-redressed text-white">Susseum, where Sus is a lifestyle. 你是个可疑的傻瓜</h2>
                <GradientButton class="relative top-8" :text="'View Demo →'"/>
            </div>
        </div>
        <!-- <div class="z-0 absolute top-0 right-0">
            <img class="h-screen" src="../assets/images/amongus.jpg">
        </div> -->
        <client-only>
            <Amongus class="z-0 absolute top-0 right-0"/>
        </client-only>
    </div>
</template>

<script>
import GradientButton from '../components/GradientButton.vue'
import Amongus from '../components/Displays/Amongus.vue'

export default {
    name: "Main",
    components: {
        GradientButton,
        Amongus
    }
}
</script>

<style scoped>

.left{
    left: 10%
}


</style>