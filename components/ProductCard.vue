<template>
    <div class="rounded-xl shadow-xl card flex items-center flex-col w-72 p-3 shadow-gray-300">
        <div class="text-2xl">
            {{title}}
        </div>
        <div>
            <img :src="require(`~/assets/images/${image}.jpg`)" class="rounded-xl"/>
        </div>
        <div>
            {{description}}
        </div>
        <div>
            <div>
                ${{price}}
            </div>
        </div>
        <div>
            <GradientButton :text="'Purchase'"/>
        </div>
    </div>
</template>

<script>
// require(`~/assets/images/${image}.jpg`)
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
        },
        price:{
            type: Number,
            default: 100000
        }
    }
}
</script>

<style scoped>



</style>