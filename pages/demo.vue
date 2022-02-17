<template>
    <div>
        <client-only>
            <Amongus :divider="1" :interactive="true" class="z-0 absolute top-0 right-0"/>
        </client-only>
        <GradientButton @click="homepage" :text="'Homepage →'" class="absolute bottom-4 left-4"/>
    </div>
</template>

<script>
import Amongus from '../components/Displays/Amongus.vue'
import GradientButton from '../components/GradientButton.vue'

export default {
    name: "DemoPage",
    components:{
        Amongus,
        GradientButton
    },
    methods:{
        homepage(){
            this.$router.push("/")
        }
    }
}
</script>
