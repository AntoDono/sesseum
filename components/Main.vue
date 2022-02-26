<template>
    <div class="overflow-x-hidden">
        <div>
            <div class="transition-all duration-1000 ease-out z-10 relative top-0 right-14 slant skew-x-6 bg-gradient-to-bl from-lightyellow to-secondaryYellow h-screen w-7/12" ref="intro"/>
            <div class="z-40 absolute top-0 left-0 h-screen w-6/12">
                <div class="relative top-96 left">
                    <h2 class="w-10/12 text-5xl font-redressed text-secondaryDark">{{text}}</h2>
                    <div ref="demo">
                        <GradientButton @click="demo" class="relative top-8" :text="'View Demo →'"/>
                    </div>
                </div>
            </div>
            <client-only>
                <Amongus :divider="2" :interactive="false" class="z-0 absolute top-0 right-0" @loaded="loaded"/>
            </client-only>
        </div>
        <Loading ref="loadscreen" :percent="percent"/>
    </div>
</template>

<script>
import GradientButton from '../components/GradientButton.vue'
import Amongus from '../components/Displays/Amongus.vue'
import Loading from '../components/Loading.vue'    

export default {
    name: "Main",
    data(){
        return {
            text: "Susseum, where Sus is a lifestyle.",
            percent: 0
        }
    },
    components: {
        GradientButton,
        Amongus,
        Loading
    },
    methods:{
        loaded(percent){
            this.percent = percent
        },
        sleep(milliseconds){
            return new Promise(resolve => setTimeout(resolve, milliseconds))
        },
        async demo(){
            this.text = "Loading Demo..."
            this.$refs.intro.classList.toggle("hide")
            this.$refs.demo.classList.toggle("hidden")
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
    width: 110vw;
    transform: skewX(0);
}


</style>