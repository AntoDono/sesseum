<template>
    <div>
        <div class="transition-all duration-1000 ease-out z-10 relative top-0 right-14 slant skew-x-6 bg-gradient-to-bl from-torange to-tdred h-screen w-7/12" id="intro">

        </div>
        <div class="z-10 absolute top-0 left-0 h-screen w-6/12">
            <div class="relative top-96 left">
                <h2 class="w-10/12 text-5xl font-redressed text-white">{{text}}</h2>
                <GradientButton @click="demo" class="relative top-8" :text="'View Demo →'" id="demo"/>
            </div>
        </div>
        <!-- <div class="z-0 absolute top-0 right-0">
            <img class="h-screen" src="../assets/images/amongus.jpg">
        </div> -->
        <client-only>
            <Amongus :divider="2" :interactive="false" class="z-0 absolute top-0 right-0"/>
        </client-only>
    </div>
</template>

<script>
import GradientButton from '../components/GradientButton.vue'
import Amongus from '../components/Displays/Amongus.vue'

export default {
    name: "Main",
    data(){
        return {
            text: "Susseum, where Sus is a lifestyle."
        }
    },
    components: {
        GradientButton,
        Amongus
    },
    methods:{
        sleep(milliseconds){
            return new Promise(resolve => setTimeout(resolve, milliseconds))
        },
        async demo(){
            this.text = "Loading Demo..."
            document.getElementById("intro").classList.toggle("hide")
            document.getElementById("demo").remove()
            await this.sleep(500)
            this.$router.push("demo")
        }
    }
}
</script>

<style scoped>

.left{
    left: 10%
}

.hide{
    width: 120vw;
    transform: skewX(0);
}


</style>