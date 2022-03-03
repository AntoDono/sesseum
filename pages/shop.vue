<template>
    <div>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Redressed&display=swap" rel="stylesheet">
        <Navbar/>
        <div class="relative top-28 w-full h-full flex justify-center">
            <ProductCard :image="'sus'" :title="'3D Amongus'" :description="'A beautifully designed Among us that is 3D printed.'"/>
        </div>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import ProductCard from '../components/ProductCard.vue'

export default {
    name: "ShopPage",
    components:{
        Navbar,
        ProductCard
    }
}
</script>
