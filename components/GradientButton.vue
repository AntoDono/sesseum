<template>
    <button class="text-white" onclick="Function">text</button>
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
