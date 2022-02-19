<template>
    <div class="absolute top-0 left-0 h-screen w-screen overflow-x-hidden">
        <div class="tiltleft transition-all duration-1000 z-20 absolute top-0 h-screen w-9/12 bg-gradient-to-bl from-torange to-tdred flex items-center justify-end border-none" ref="left">
            <div class="flex flex-col">
                <h2 class="font-redressed text-white text-4xl">Susseum Loading.</h2>
                <LoadingBar :height="1" :width="14" :percent="percent"/>
            </div>
        </div>
        <div class="tiltright transition-all duration-1000 z-20 absolute top-0 h-screen w-9/12 bg-gradient-to-tl from-tdred to-torange border-none" ref="right"></div>
    </div>
</template>

<script>
import LoadingBar from '../components/LoadingBar.vue'

export default {
    name: "Loading",
    props:{
        percent: Number
    },
    components:{
        LoadingBar
    },
    methods:{
        loaded(){
            this.$refs.left.classList.toggle("moveleft")
            this.$refs.right.classList.toggle("moveright")
        },
        sleep(milliseconds){
            return new Promise(resolve => setTimeout(resolve, milliseconds))
        },
    },
    watch: {
        async percent(percent){
            if (percent==1) {
                this.sleep(200)
                this.loaded()
            }
        }
    }
}
</script>

<style scoped>

.tiltleft{
    right: 50%;
    transform: skewX(-10deg);
}

.tiltright{
    left: 50%;
    transform: skewX(-10deg);
}

.moveleft{
    transform: translateX(-100%);
}

.moveright{
    transform: translateX(100%);
}

</style>
