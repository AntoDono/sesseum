<template>
    <div class="absolute top-0 left-0 h-screen w-screen overflow-x-hidden">
        <div class="tiltleft transition-all duration-1000 z-20 absolute top-0 h-screen w-9/12 bg-orange-400 flex items-center justify-end" id="left">
            <h2 class="font-redressed text-white text-4xl">Susseum will be with you soon.</h2>
        </div>
        <div class="tiltright transition-all duration-1000 z-20 absolute top-0 h-screen w-9/12 bg-orange-400" id="right"></div>
    </div>
</template>

<script>
export default {
    name: "Loading",
    methods:{
        loaded(){
            document.getElementById("left").classList.add("moveleft")
            document.getElementById("right").classList.add("moveright")
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
