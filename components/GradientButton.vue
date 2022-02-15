<template>
    <button class="
        hover:from-pink-500 hover:to-yellow-500 
        bg-gradient-to-tr from-pink-500 to-yellow-600 
        transition ease-in-out duration-500 
        rounded-lg text-white p-4" 
    onclick="Function">{{text}}</button>
</template>

<script>

export default {
    name: 'GradientButton',
    props:{
        text: String,
        callback: Function,
    }
}

</script>
