<template>
    <div class="fixed top-0 left-0 h-full w-full overflow-x-hidden z-50" ref="maindiv">
        <div class="tiltleft z-50 absolute top-0 h-full w-9/12 bg-gradient-to-bl from-torange to-tdred flex items-center justify-end border-none" ref="left">
            <div class="flex flex-col">
                <h2 class="font-redressed text-white text-4xl">Susseum Loading.</h2>
                <LoadingBar :height="1" :width="14" :percent="percent"/>
            </div>
        </div>
        <div class="tiltright z-50 absolute top-0 h-full w-9/12 bg-gradient-to-tl from-tdred to-torange border-none" ref="right"></div>
    </div>
</template>

<script>
import LoadingBar from '../components/LoadingBar.vue'
import gsap from "gsap"

export default {
    name: "Loading",
    props:{
        percent: Number
    },
    components:{
        LoadingBar
    },
    methods:{
        sleep(milliseconds){
            return new Promise(resolve => setTimeout(resolve, milliseconds))
        },
        loaded(){
            gsap.to(this.$refs.left, { x:-window.innerWidth/1.8, ease: "power1.inOut", duration: 1.2 })
            gsap.to(this.$refs.right, { x:window.innerWidth/1.8, ease: "power1.inOut", duration: 1.2,  onComplete: ()=>{
                console.log("Done with loading screen")
                this.$refs.maindiv.classList.toggle("z-0")
                this.$refs.maindiv.classList.toggle("z-50")
                this.$refs.maindiv.classList.toggle("fixed")
                this.$refs.maindiv.classList.toggle("absolute")
            }})
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


</style>
