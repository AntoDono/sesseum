<template>
    <div class="shadow-xl h-96 w-80 flex items-center flex-col">
        <div class="title">
            <h2>{{title}}</h2>
        </div>
        <div class="image flex items-center">
            <img :src="require(`~/assets/images/${image}.jpg`)" alt="imageAlt" class="h-5/6 rounded-xl"/>
        </div>
        <div class="description">
            <p class="pl-1.5 pr-1.5">
                {{description}}
            </p>
        </div>
        <div class="button">
            <GradientButton :text="'Purchase'"/>
        </div>
    </div>
</template>

<script>
import GradientButton from '../components/GradientButton.vue'

export default {
    name: "ProductCard",
    components:{
        GradientButton
    },
    props:{
        title:{
            type: String,
            default: "Title here"
        },
        image:{
            type: String,
            default: "."
        },
        imageAlt:{
            type: String,
            default: "Product Image"
        },
        description:{
            type: String,
            default: "Product Description here"
        }
    }
}
</script>

<style scoped>

.title{
    height: 5%;
}

.image{
    height: 70%;
}

.description{
    height: 10%;
}

.button{
    height: 15%;
}

</style>