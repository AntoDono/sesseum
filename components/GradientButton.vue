<template>
    <button class="
        hover:from-pink-500 hover:to-yellow-500 
        bg-gradient-to-tr from-pink-500 to-yellow-600 
        transition ease-in-out duration-500 
        rounded-lg text-white p-4" 
    @click="click">{{text}}</button>
</template>

<script>

export default {
    name: 'GradientButton',
    props:{
        text: String
    },
    methods:{
        click(){
            this.$emit("click")
        }
    }
}

</script>
