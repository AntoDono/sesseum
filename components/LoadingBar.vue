<template>
    <div ref="loadbar">
        <div class="h-full bg-white transition-all duration-100 ease-linear" id="bar"></div>
    </div>
</template>

<script>
export default {
    name: "LoadingBar",
    props:{
        width: Number,
        height: Number,
        percent: Number
    },
    mounted(){
        this.$refs.loadbar.style.width = `${this.width}rem`
        this.$refs.loadbar.style.height = `${this.height}rem`
        document.getElementById("bar").style.width = `${0.1*this.width}rem`
    },
    watch: {
        percent(percent){
            document.getElementById("bar").style.width = `${this.percent*this.width}rem`
            console.log(`Percent loaded: ${percent}`)
        }
    }
}
</script>
