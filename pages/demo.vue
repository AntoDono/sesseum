<template>
    <div>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Redressed&display=swap" rel="stylesheet">
        <Loading :percent="percent"/>
        <client-only>
            <Amongus :divider="1" :interactive="true" class="z-0 absolute top-0 right-0" @loaded="loaded"/>
        </client-only>
        <GradientButton @click="homepage" :text="'Homepage →'" class="absolute bottom-4 left-4"/>
    </div>
</template>

<script>
import Amongus from '../components/Displays/Amongus.vue'
import GradientButton from '../components/GradientButton.vue'
import Loading from '../components/Loading.vue'

export default {
    name: "DemoPage",
    components:{
        Amongus,
        GradientButton,
        Loading
    },
    data(){
        return {
            percent: 0
        }
    },
    methods:{
        homepage(){
            this.$router.push("/")
        },
        loaded(percent){
            this.percent = percent
        }
    }
}
</script>
